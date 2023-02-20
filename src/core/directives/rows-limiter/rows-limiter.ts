import { Directive, ElementRef, inject, InjectionToken, Input, Renderer2 } from '@angular/core';
import { coerceNumberProperty, NumberInput } from '@angular/cdk/coercion';

export const ROWS_LIMITER = new InjectionToken<RowsLimiter>('ROWS_LIMITER');

@Directive({
  standalone: true,
  selector: '[rowsLimit]',
  providers: [{provide: ROWS_LIMITER, useExisting: RowsLimiter}],
})
export class RowsLimiter {
  @Input()
  set rowsLimit(value: NumberInput) {
    const max = coerceNumberProperty(value);
    if (max > 0) {
      this._renderer.setStyle(this._nativeElement, 'display', '-webkit-box');
      this._renderer.setStyle(this._nativeElement, '-webkit-line-clamp', max);
      this._renderer.setStyle(this._nativeElement, '-webkit-box-orient', 'vertical');
      this._renderer.setStyle(this._nativeElement, 'overflow', 'hidden');
    }
  }

  private readonly _renderer = inject(Renderer2);
  private readonly _nativeElement = inject(ElementRef).nativeElement;
}