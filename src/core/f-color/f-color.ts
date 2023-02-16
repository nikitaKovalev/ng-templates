import { Directive, ElementRef, inject, InjectionToken, Input, Renderer2 } from '@angular/core';

export const F_COLOR = new InjectionToken<FontColor>('F_COLOR');

export type ColorPalette = 'dark' | 'gray' | 'def' | 'blue' | 'blue-white' | 'red';

@Directive({
  standalone: true,
  selector: '[fColor]',
  providers: [{provide: F_COLOR, useExisting: FontColor}],
})
export class FontColor {
  @Input('fColor')
  set color(value: ColorPalette) {
    this._renderer.addClass(this._nativeElement, `c-${value}`);
  }

  private readonly _renderer = inject(Renderer2);
  private readonly _nativeElement = inject(ElementRef).nativeElement;
}