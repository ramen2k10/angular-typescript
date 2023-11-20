import { Directive, Input, TemplateRef, ViewContainerRef } from "@angular/core";

@Directive({
    selector:'[appCustomHighlight]'
})

 export class CustomHighlightDirective{

    @Input() set appCustomHighlight(condition: boolean){
        if(condition){
            this.vcRef.createEmbeddedView(this.templateRefe);
        }else{
            this.vcRef.clear();
        }
    }
    
    constructor(private  templateRefe: TemplateRef<any>, private vcRef: ViewContainerRef){

    }
 }
