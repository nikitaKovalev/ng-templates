import { BooleanInput, NumberInput } from '@angular/cdk/coercion';

export interface CardInteractive {
  rowsLimit: NumberInput;
  bold: BooleanInput;
  color: 'dark' | 'gray' | 'def' | 'blue' | 'blue-white';
}