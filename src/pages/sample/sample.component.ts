import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  standalone: true,
  template: `samples`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SampleComponent {}