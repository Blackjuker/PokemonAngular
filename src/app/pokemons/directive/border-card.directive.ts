import { Directive, ElementRef, HostListener} from '@angular/core';

@Directive({
  selector: '[pkmnBorderCard]'
})

export class BorderCardDirective {
    private  initialColor: string = '#f5f5f5';
    private  defaultColor: string = '#009688';
    private  defaultHeight: number = 200;
      
    

    constructor(private el: ElementRef) {
        this.setBorder(this.initialColor);
      }

    @HostListener('mouseenter') onMouseEnter() {
      this.setBorder(this.defaultColor);
    //  this.setHeight(this.defaultHeight*1.5);
    }

    @HostListener('mouseleave') onMouseLeave() {
      this.setBorder(this.initialColor);
    //  this.setHeight(this.defaultHeight);
    }

   
    
      private setBorder(color: string) {
        let border=' solid 4px' + color;
        //el  = est un élément référenciel qui pointe navitevemnt sur une balise. exemple div
        this.el.nativeElement.style.border = border;
      }

      private setHeight(height: number) {

        this.el.nativeElement.style.height = height+'px';
      }
    
    
}