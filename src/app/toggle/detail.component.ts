import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToggleService } from './toggle.service';
import { ToggleRolloutComponent } from './rollout.component';
import { Toggle } from 'toggle-api';
import { Subscription } from 'rxjs';

@Component({
  moduleId: module.id,
  templateUrl: 'detail.component.html',
  directives: [ToggleRolloutComponent]
})
export class ToggleDetailComponent implements OnInit, OnDestroy {
  errorMessage: string;
  toggle: Toggle;
  private sub: Subscription;

  constructor(private route: ActivatedRoute,
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
    this.toggleService.getToggle(id).subscribe(toggle => this.toggle = toggle, error => this.errorMessage = <any>error)
  }
}

