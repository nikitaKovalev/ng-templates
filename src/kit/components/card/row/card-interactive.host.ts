import { Directive } from '@angular/core';
import { FontColor, FontWeightBold, RowsLimiter } from '@core';

export const CARD_INTERACTIVE_HOST: Directive['hostDirectives'] = [
  {directive: RowsLimiter, inputs: ['rowsLimit']},
  {directive: FontWeightBold, inputs: ['fwBold: bold']},
  {directive: FontColor, inputs: ['fColor: color']},
];