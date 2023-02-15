import { Directive, Input } from '@angular/core';
import { CardInteractive } from '@kit/components/card/row/card-interactive.interface';
import { BooleanInput, NumberInput } from '@angular/cdk/coercion';

@Directive()
export class CardInteractiveBase implements CardInteractive {
  @Input()
  bold: BooleanInput;

  @Input()
  rowsLimit: NumberInput;

  @Input()
  color: "dark" | "gray" | "def" | "blue" | "blue-white" = 'def';
}