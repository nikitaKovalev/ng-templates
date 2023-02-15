import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'card-row',
  template: `
    <div class="card-row">
      <ng-content select="[cardRowPrefix]"></ng-content>
      <div class="card-row__spacer"></div>
      <ng-content select="[cardRowSuffix]"></ng-content>
    </div>
  `,
  styles: [`
    .card-row {
      display: flex;
      align-items: center;
      color: var(--def-color);
      gap: var(--def-size);
      padding: 2px;
      margin: -2px -2px;
      border-radius: 2px;
      &__spacer {
        flex: 1 1 auto;
      }
    }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardRow {}