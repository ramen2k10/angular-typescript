import { Directive, ElementRef, HostListener, OnInit, Renderer2, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit{

  /**
   * Example of directive properties binding
   * 
   */
  @Input() defaultColor: string = 'transparent';
  @Input() newColor: string = 'blue';

  @HostBinding('style.backgroundColor') backgroundColor: string = this.defaultColor;
  constructor(private elementReference: ElementRef, private rendera: Renderer2) { 

  }

  ngOnInit(): void {
      //this.rendera.setStyle(this.elementReference.nativeElement, 'background-color', 'blue');
  }

  @HostListener('mouseenter') mouseover(eventData: Event){
    //this.rendera.setStyle(this.elementReference.nativeElement, 'background-color', 'blue');
    this.backgroundColor = this.newColor;
  }
  
  @HostListener('mouseleave') mouseleave(eventData: Event){
    //this.rendera.setStyle(this.elementReference.nativeElement, 'background-color', 'transparent');
    this.backgroundColor = this.defaultColor;
  }
}
