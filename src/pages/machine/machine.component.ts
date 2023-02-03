import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Card } from '@kit';

@Component({
  standalone: true,
  imports: [Card],
  template: `<div style="width: 33%"><card></card></div>`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MachineComponent {}