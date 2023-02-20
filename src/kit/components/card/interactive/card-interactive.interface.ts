import { BooleanInput, NumberInput } from '@angular/cdk/coercion';
import { ColorPalette } from '@core/types/palette.type';

export interface CardInteractive {
  rowsLimit: NumberInput;
  bold: BooleanInput;
  color: ColorPalette;
}