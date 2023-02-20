import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CARD_IMPORTS } from './card.imports';
import { ColorPalette } from '@core/types/palette.type';
import { ICONS } from '@core';

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
  icon: typeof ICONS[number] = 'tech-1';

  @Input()
  iconColor: ColorPalette = 'def';

  @Input()
  isActive = false;

  onActivate(): void {
    this.isActive = !this.isActive;
  }
}

