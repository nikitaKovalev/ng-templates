import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MACHINE_IMPORTS } from './machine.imports';
import { CardExpansionPanel } from '@kit/components/card/expansion-panel/card-expansion-panel';
import { CardExpansionPanelContent } from '@kit/components/card/expansion-panel/card-expansion-panel-content';
import { MatButtonModule } from '@angular/material/button';

@Component({
  standalone: true,
  imports: [
    MACHINE_IMPORTS,
    CardExpansionPanel,
    CardExpansionPanelContent,
    MatButtonModule
  ],
  templateUrl: './machine.template.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MachineComponent {}