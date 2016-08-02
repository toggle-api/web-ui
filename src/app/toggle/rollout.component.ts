import { Component, Input } from '@angular/core';
import { NgFor } from '@angular/common';
import { Toggle } from 'toggle-api';
import { ToggleOptionData } from 'toggle-api/toggle';

@Component({
  moduleId: module.id,
  selector: 'toggle-rollout',
  template: `
    <div [ngSwitch]="singleOption()" class="progress progress-table">
      <template [ngSwitchCase]="true">
        <div *ngFor="let option of getRollout()"
             class="progress-bar {{ option.Value ? 'progress-bar-success' : 'progress-bar-danger' }}"
             [style.width.%]="100">
          {{ getSingleOption().Value }} (100%)
        </div>
      </template>
      <template ngSwitchDefault>
        <div *ngFor="let option of getRollout()"
             class="progress-bar {{ option.Value ? 'progress-bar-success' : 'progress-bar-danger' }}"
             [style.width.%]="option.Amount * 100.0 | number:'1.0-2'">
          {{ option.Value }} ({{ option.Amount * 100.0 | number:'1.0-2' }}%)
        </div>
      </template>
    </div>
  `,
  directives: [NgFor]
})
export class ToggleRolloutComponent {
  @Input() toggle: Toggle;

  constructor() {
  }

  singleOption(): boolean {
    return this.getOptions().length === 1;
  }

  getSingleOption(): ToggleOptionData {
    return this.getOptions()[0];
  }

  getRollout(): Array<any> {
    let amount = 1;
    return this.getOptions().sort((t1, t2) => t1.Value > t2.Value ? -1 : 1).map(toggle => {
      let localAmount = amount - toggle.Cutoff;
      amount -= localAmount;
      return {
        Value: toggle.Value,
        Amount: localAmount
      };
    });
  }

  private getOptions(): ToggleOptionData[] {
    if (this.toggle) {
      return this.toggle.Options.filter(toggle => 0 <= toggle.Cutoff && toggle.Cutoff < 1);
    } else {
      return [];
    }
  }
}
