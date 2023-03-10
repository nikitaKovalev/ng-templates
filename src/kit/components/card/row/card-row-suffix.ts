import { Directive, InjectionToken } from '@angular/core';
import { CARD_INTERACTIVE_HOST } from '@kit/components/card/interactive/card-interactive.host';
import { CardInteractiveBase } from '@kit/components/card/interactive/card-interactive.base';

export const CARD_ROW_SUFFIX = new InjectionToken<CardRowSuffix>('CARD_ROW_SUFFIX');

@Directive({
  standalone: true,
  selector: '[cardRowSuffix], [cardSuffix]',
  hostDirectives: CARD_INTERACTIVE_HOST,
  providers: [{provide: CARD_ROW_SUFFIX, useExisting: CardRowSuffix}],
})
export class CardRowSuffix extends CardInteractiveBase {}