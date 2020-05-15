import {Directive, ElementRef, OnInit, AfterContentInit, Renderer2, HostListener, HostBinding} from '@angular/core';
import {Router} from '@angular/router';

@Directive({
  selector: '[appTabs]'
})
export class TabsDirective {

  test = document.getElementsByClassName('cellSort');
  constructor(private el: ElementRef, private r: Renderer2) {
    el.nativeElement.style.color = 'red';
    console.log(el);
  }

  @HostListener('click') onClick() {
    let activeSort = '';
    if (this.el.nativeElement.dataset === 'desc' || this.el.nativeElement.dataset === 'noSort') {
      activeSort = 'asc';
    } else {
      activeSort = 'desc';
    }

    const test = document.getElementsByClassName('cellSort');
    for (const i in test) {
      console.log(test[i]);
    }
    console.log(test);
    console.log(this.el);


    //console.log(this.test[0].sortd)
  }



}
