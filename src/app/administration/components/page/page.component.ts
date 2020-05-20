import {Component, Input, OnInit} from '@angular/core';
import {PageService} from '../../services/page.service';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.scss']
})
export class PageComponent implements OnInit {


  activateDisplayPages: boolean; /*Активность блока с кнопками*/
  pagesArray: Array<number> /*Массив с цифрами для кнопок*/;
  activeArrayPages: object;
  firstPage: number; /*Значение первой кнопки*/
  endPage: number; /*Значение последеней кнопки*/
  countPage: number;
  countActivePage: number;

  @Input() countStr: number;
  @Input() countRows: number;


  constructor(private pageService: PageService) { }

  ngOnInit() {
    console.log('this.countRows: ', this.countRows);
    console.log('this.countStr: ', this.countStr);
    this.pagesCount(this.countStr, this.countRows);
    this.pagesDislay();
  }

  pagesCount(str, row) {
    const division: number  = Math.ceil(str / row);
    if (division === 0 || division === 1) {
      this.countPage = 1;
    } else if (division > 1) {
      this.countPage = division;
    } else {
      console.log('Ошибка: количетсво страниц');
    }
    for (let i = 1; i <= this.countPage; i++) {
      this.pagesArray.push(i);
    }
    if (this.countPage > 1) {
      this.activateDisplayPages = true;
      this.firstPage = 1;
      if (this.countPage < 6) {
        this.endPage = this.countPage;
      } else {
        this.endPage = 5;
      }
    }
  }

  pagesDislay() {
    if (this.firstPage < 9 || this.endPage < 9) {
      for (let i = this.firstPage; i <= this.endPage; i++) {
        let j = 0;
        if (i < 5) {
          this.activeArrayPages[1] = i;
          j = j + 1;
        }
      }
      console.log(this.activeArrayPages);
    }
    if (this.firstPage > 9 || this.endPage > 9) {
      this.countActivePage = 3;
    }
    if (this.firstPage > 99 || this.endPage > 99) {
      this.countActivePage = 2;
    }
    if (this.firstPage > 999 || this.endPage > 999) {
      this.countActivePage = 1;
    }

  }





}
