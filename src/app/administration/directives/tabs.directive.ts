import {Directive, ElementRef, OnInit, AfterContentInit, Renderer2} from '@angular/core';
import {Router} from '@angular/router';

@Directive({
  selector: '[appTabs]'
})
export class TabsDirective implements OnInit {

  private a: string

  constructor(private route: Router) {

  }

  ngOnInit(): void {
  }



}
