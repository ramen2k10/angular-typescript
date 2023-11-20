import { Directive, ElementRef, OnInit } from "@angular/core";

@Directive({
    selector: '[appBasicHighlight]'
})

export class BasicHightlightDirective implements OnInit{

    constructor(private elementReference: ElementRef){
        
    }

    ngOnInit(): void {
        this.elementReference.nativeElement.style.backgroundColor = 'pink'
    }
}