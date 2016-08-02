import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToggleService } from './toggle.service';
import { ToggleRolloutComponent } from './rollout.component';
import { Toggle } from 'toggle-api';
import { Subscription } from 'rxjs';

@Component({
  moduleId: module.id,
  templateUrl: 'edit.component.html',
  directives: [ToggleRolloutComponent]
})
export class ToggleEditComponent implements OnInit, OnDestroy {
  errorMessage: string;
  toggle: Toggle;
  truePercent: number;
  submitted = false;
  active = false;
  error: string;
  private sub: Subscription;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private toggleService: ToggleService) {
  }

  ngOnInit() {
    this.sub = this.route
      .params
      .subscribe(params => {
        this.getToggle(params['id']);
      });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  getToggle(id: string) {
    this.toggleService.getToggle(id).
        subscribe(
          toggle => {
            this.active = true;
            this.toggle = toggle;
            let trueOption = this.toggle.Options.find(o => o.Value === true);
            this.truePercent = trueOption ? (1 - trueOption.Cutoff) * 100 : 0;
          },
          error => this.errorMessage = <any>error
        );
  }

  changeTruePercent() {
    if (this.truePercent <= 0) {
      this.toggle.Options = [{Value: false, Cutoff: 0}];
    } else if (this.truePercent >= 100) {
      this.toggle.Options = [{Value: true, Cutoff: 0}];
    } else {
      this.toggle.Options = [
        {Value: false, Cutoff: 0},
        {Value: true, Cutoff: 1 - this.truePercent / 100},
      ];
    }
  }

  onSubmit() {
    this.submitted = true;
    this.error = undefined;
    this.updateToggle();
  }

  updateToggle() {
    console.log('updating');
    this.toggleService.updateToggle(this.toggle).
        then((toggle) => {
          this.router.navigate(['toggles', toggle.Id]);
        }).
        catch(error => {
          this.submitted = false;
          this.error = error;
          return null;
        });
  }
}

