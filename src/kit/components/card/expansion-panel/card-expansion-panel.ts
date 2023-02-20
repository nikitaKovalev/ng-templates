import { ChangeDetectionStrategy, Component, ContentChild, InjectionToken, Input, TemplateRef } from '@angular/core';
import { NgTemplateOutlet } from '@angular/common';
import { expand } from './card-expansion-panel.animation';
import { CARD_EXPANSION_PANEL_CONTENT } from '@kit/components/card/expansion-panel/card-expansion-panel-content';
import { CARD_EXPANSION_PANEL_IMPORTS } from '@kit/components/card/expansion-panel/card-expansion-panel.imports';

export const CARD_EXPANSION_PANEL = new InjectionToken<CardExpansionPanel>('CARD_EXPANSION_PANEL');

@Component({
  standalone: true,
  imports: CARD_EXPANSION_PANEL_IMPORTS,
  selector: 'card-expansion-panel',
  templateUrl: './card-expansion-panel.html',
  styleUrls: ['/card-expansion-panel.scss'],
  animations: [expand],
  providers: [{provide: CARD_EXPANSION_PANEL, useExisting: CardExpansionPanel}],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardExpansionPanel {
  @Input()
  labels: [string, string] = ['Свернуть', 'Подробнее'];

  get label(): string {
    return this.isExpanded ? this.labels[0] : this.labels[1];
  }

  isExpanded = false;

  @ContentChild(CARD_EXPANSION_PANEL_CONTENT, {static: true})
  readonly content: TemplateRef<NgTemplateOutlet> | null = null;

  onExpand(): void {
    this.isExpanded = !this.isExpanded;
  }
}