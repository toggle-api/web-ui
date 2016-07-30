import { ROUTER_DIRECTIVES } from '@angular/router';
import { DROPDOWN_DIRECTIVES } from 'ng2-dropdown';
import { Component } from '@angular/core';
import { components } from './app.routes';
import { ToggleService } from './toggle/toggle.service';
import './rxjs-operators';

@Component({
  moduleId: module.id,
  selector: 'app',
  templateUrl: 'app.component.html',
  providers: [ToggleService],
  directives: [ROUTER_DIRECTIVES, DROPDOWN_DIRECTIVES],
  precompile: components,
})
export class AppComponent {
}
