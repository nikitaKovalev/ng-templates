import { Card } from '@kit';
import { CardRow } from '@kit/components/card/row/card-row';
import { CardRowDirective } from '@kit/components/card/row/card-row.directive';
import { CardRowPrefix } from '@kit/components/card/row/card-row-prefix';
import { CardRowSuffix } from '@kit/components/card/row/card-row-suffix';
import { CardRowActions } from '@kit/components/card/actions/card-row-actions';
import { MatRippleModule } from '@angular/material/core';
import { MatIconModule } from '@angular/material/icon';

export const MACHINE_IMPORTS = [
  MatRippleModule,
  MatIconModule,

  Card,
  CardRow,
  CardRowDirective,
  CardRowPrefix,
  CardRowSuffix,
  CardRowActions,
];