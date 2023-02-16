import { ChangeDetectionStrategy, Component, ContentChild, InjectionToken, TemplateRef } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatRippleModule } from '@angular/material/core';
import { NgIf, NgTemplateOutlet } from '@angular/common';
import { expand } from './card-expansion-panel.animation';
import { CARD_EXPANSION_PANEL_CONTENT } from '@kit/components/card/expansion-panel/card-expansion-panel-content';

export const CARD_EXPANSION_PANEL = new InjectionToken<CardExpansionPanel>('CARD_EXPANSION_PANEL');

@Component({
  standalone: true,
  imports: [MatIconModule, MatRippleModule, NgIf, NgTemplateOutlet],
  selector: 'card-expansion-panel',
  templateUrl: './card-expansion-panel.html',
  styleUrls: ['/card-expansion-panel.scss'],
  animations: [expand],
  providers: [{provide: CARD_EXPANSION_PANEL, useExisting: CardExpansionPanel}],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardExpansionPanel {
  label = 'Свернуть';

  isExpanded = false;

  @ContentChild(CARD_EXPANSION_PANEL_CONTENT, {static: true})
  readonly content: TemplateRef<NgTemplateOutlet> | null = null;

  onExpand(): void {
    this.isExpanded = !this.isExpanded;
  }
}