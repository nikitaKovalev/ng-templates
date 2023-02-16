import { BooleanInput, NumberInput } from '@angular/cdk/coercion';
import { ColorPalette } from '@core';

export interface CardInteractive {
  rowsLimit: NumberInput;
  bold: BooleanInput;
  color: ColorPalette;
}