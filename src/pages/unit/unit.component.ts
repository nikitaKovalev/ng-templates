import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  standalone: true,
  template: `units`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UnitComponent {}