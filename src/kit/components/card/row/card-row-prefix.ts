import { Directive, InjectionToken } from '@angular/core';
import { CARD_INTERACTIVE_HOST } from '@kit/components/card/interactive/card-interactive.host';
import { CardInteractiveBase } from '@kit/components/card/interactive/card-interactive.base';

export const CARD_ROW_PREFIX = new InjectionToken<CardRowPrefix>('CARD_ROW_PREFIX');

@Directive({
  standalone: true,
  selector: '[cardRowPrefix]',
  hostDirectives: CARD_INTERACTIVE_HOST,
  providers: [{provide: CARD_ROW_PREFIX, useExisting: CardRowPrefix}],
})
export class CardRowPrefix extends CardInteractiveBase {}
