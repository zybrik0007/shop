import { Component, OnInit } from '@angular/core';
import {PageService} from '../../services/page.service';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.scss']
})
export class PageComponent implements OnInit {

  constructor(private pageService: PageService) { }

  ngOnInit() {
    console.log(this.pageService.countStr);
  }

}
