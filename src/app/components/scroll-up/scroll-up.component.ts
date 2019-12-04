import { Component, Input, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-scroll-up',
  templateUrl: './scroll-up.component.html',
  styleUrls: ['./scroll-up.component.scss']
})
export class ScrollUpComponent {
  @ViewChild('top', {static: true}) top: ElementRef;
  constructor(private el: ElementRef) { }
  onScrollUp() {
    // window.scroll(0,0);
    // this.el.nativeElement.scrollIntoView({behavior: 'smooth'}); 
    // this.el.nativeElement.scrollIntoView();
    window.scrollTo({top: 0, behavior: 'smooth'}); 
  }
}
