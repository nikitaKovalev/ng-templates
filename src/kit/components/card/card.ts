import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CARD_IMPORTS } from './card.imports';
import { MatButtonModule } from '@angular/material/button';

@Component({
  standalone: true,
  imports: [
    CARD_IMPORTS,
    MatButtonModule
  ],
  selector: 'card',
  templateUrl: './card.html',
  styleUrls: [ './card.scss' ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Card {
  isActive = false;

  onActivate(): void {
    this.isActive = !this.isActive;
  }
}