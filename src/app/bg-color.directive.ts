import { Directive, Input, ElementRef, Renderer2, OnChanges, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[appBgColor]'
})
export class BgColorDirective implements OnChanges {
  @Input('appBgColor') bgColor = '';
  @Input('appColor') color = '';

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['bgColor']) {
      this.renderer.setStyle(this.el.nativeElement, 'background-color', this.bgColor);
    }
    if (changes['color']) {
      this.renderer.setStyle(this.el.nativeElement, 'color', this.color);
    }
  }
}
