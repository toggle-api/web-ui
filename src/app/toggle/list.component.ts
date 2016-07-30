import { Component, OnInit } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { NgFor } from '@angular/common';
import { ToggleService } from './toggle.service';
import { Toggle } from 'toggle-api';
import { ToggleRolloutComponent } from './rollout.component';

@Component({
  moduleId: module.id,
  templateUrl: 'list.component.html',
  directives: [NgFor, ROUTER_DIRECTIVES, ToggleRolloutComponent]
})
export class ToggleListComponent implements OnInit {
  errorMessage: string;
  toggles: Toggle[];

  constructor(private toggleService: ToggleService) {
  }

  ngOnInit() {
    this.getToggles();
  }

  getToggles() {
    this.toggleService.getToggles().subscribe(toggles => this.toggles = toggles, error => this.errorMessage = <any>error);
  }
}
