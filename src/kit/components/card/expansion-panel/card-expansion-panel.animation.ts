import { animate, style, transition, trigger } from '@angular/animations';

const EXPAND_ANIMATION = '400ms cubic-bezier(0.4, 0.0, 0.2, 1)';

export const expand = trigger('expand', [
  transition(':enter', [
    style({ height: '0px', minHeight: '0', opacity: 0 }),
    animate(EXPAND_ANIMATION, style({ height: '*', opacity: 1 })),
  ]),
  transition(':leave', [
    style({ height: '*', opacity: 1 }),
    animate(
      EXPAND_ANIMATION,
      style({ height: '0px', minHeight: '0', opacity: 0 })
    ),
  ]),
]);
