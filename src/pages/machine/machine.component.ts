import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MACHINE_IMPORTS } from './machine.imports';

@Component({
  standalone: true,
  imports: MACHINE_IMPORTS,
  templateUrl: './machine.template.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MachineComponent {}