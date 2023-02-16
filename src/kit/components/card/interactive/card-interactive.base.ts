import { Directive, Input } from '@angular/core';
import { CardInteractive } from '@kit/components/card/interactive/card-interactive.interface';
import { BooleanInput, NumberInput } from '@angular/cdk/coercion';
import { ColorPalette } from '@core';

@Directive()
export class CardInteractiveBase implements CardInteractive {
  @Input()
  bold: BooleanInput;

  @Input()
  rowsLimit: NumberInput;

  @Input()
  color: ColorPalette = 'def';
}