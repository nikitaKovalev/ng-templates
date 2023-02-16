import { ChangeDetectionStrategy, Component, ContentChildren, Input, QueryList, TemplateRef } from '@angular/core';
import { CARD_IMPORTS } from './card.imports';
import { CARD_ROW, CardRowDirective } from '@kit/components/card/row/card-row.directive';

@Component({
  standalone: true,
  imports: CARD_IMPORTS,
  selector: 'card',
  templateUrl: './card.html',
  styleUrls: [ './card.scss' ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Card {
  @Input()
  icon = 'tech-1'

  @Input()
  isActive = false;

  @ContentChildren(CARD_ROW)
  readonly rows: QueryList<TemplateRef<CardRowDirective>> | null = null;

  onActivate(): void {
    this.isActive = !this.isActive;
  }
}