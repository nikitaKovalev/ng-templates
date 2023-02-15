import { Directive, InjectionToken, TemplateRef } from '@angular/core';

export const CARD_ROW = new InjectionToken<TemplateRef<CardRowDirective>>('crRef template');

@Directive({
  standalone: true,
  selector: '[crRef]',
  providers: [
    {
      provide: CARD_ROW,
      deps: [TemplateRef],
      useFactory: (templateRef: TemplateRef<CardRowDirective>) => templateRef,
    },
  ],
})
export class CardRowDirective {}