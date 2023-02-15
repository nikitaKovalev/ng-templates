import { Directive, ElementRef, inject, InjectionToken, Input, Renderer2 } from '@angular/core';
import { BooleanInput, coerceBooleanProperty } from '@angular/cdk/coercion';

export const FONT_WEIGHT_BOLD = new InjectionToken<FontWeightBold>('FONT_WEIGHT_BOLD');

@Directive({
  standalone: true,
  selector: '[fwBold]',
  providers: [{provide: FONT_WEIGHT_BOLD, useExisting: FontWeightBold}],
})
export class FontWeightBold {

  @Input('fwBold')
  set bold(value: BooleanInput) {
    const isBold = coerceBooleanProperty(value);
    isBold && this._renderer.setStyle(this._nativeElement, 'font-weight', 'bold');
  }

  private readonly _renderer = inject(Renderer2);
  private readonly _nativeElement = inject(ElementRef).nativeElement;
}