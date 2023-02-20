import { Directive, InjectionToken, TemplateRef } from '@angular/core';
import { NgTemplateOutlet } from '@angular/common';

export const CARD_EXPANSION_PANEL_CONTENT = new InjectionToken<TemplateRef<NgTemplateOutlet>>(
  'CARD_EXPANSION_PANEL_CONTENT'
);

@Directive({
  standalone: true,
  selector: 'ng-template[expansionPanelContent]',
  providers: [
    {
      provide: CARD_EXPANSION_PANEL_CONTENT,
      deps: [TemplateRef],
      useFactory: (templateRef: TemplateRef<NgTemplateOutlet>) => templateRef,
    }
  ],
})
export class CardExpansionPanelContent {}