import {Directive, ElementRef, OnInit, AfterContentInit, Renderer2, HostListener} from '@angular/core';
import {Router} from '@angular/router';

@Directive({
  selector: '[appTabs]'
})
export class TabsDirective {

  test = document.getElementsByClassName('cellSort');
  constructor(private el: ElementRef, private r: Renderer2) {
    el.nativeElement.style.color = 'red';

  }

  @HostListener('click', ['$event']) onClick(event: Event) {

    //console.log(this.test[0].sortd)
  }

}
