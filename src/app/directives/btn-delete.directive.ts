import { Directive, ElementRef, HostListener, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[btn-del]'
})
export class BtnDeleteDirective {


  /* @Input()
  bg: string = 'red' */

  constructor(private rendere: Renderer2 ,
    private el: ElementRef
  ) { 

   
    this.rendere.addClass(this.el.nativeElement, 'btn-del')

  }

}
 