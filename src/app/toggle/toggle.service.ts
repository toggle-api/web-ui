import { Injectable } from '@angular/core';
import { Toggle, APIClient, JWTAuthenticator } from 'toggle-api';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ToggleService {
  private client: APIClient;

  constructor() {
    this.client = new APIClient('http://api.toggleapi.com/', new JWTAuthenticator('jwt_token'));
  }

  getToggles(): Observable<Toggle[]> {
    return Observable.fromPromise(this.client.getToggles())
      .catch(this.handleError);
  }

  getToggle(id: string): Observable<Toggle> {
    return this.getToggles().map(this.matchToggle(id));
  }

  updateToggle(toggle: Toggle): Promise<Toggle> {
    return this.client.updateToggle(toggle);
  }

  private matchToggle(id: string) {
    return (toggles: Toggle[]): Toggle => {
      return toggles.filter(toggle => toggle.Id === id)[0];
    };
  }

  private handleError(error: any) {
    let errMsg = (error.message) ? error.message : error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg);
    return Observable.throw(errMsg);
  }
}
