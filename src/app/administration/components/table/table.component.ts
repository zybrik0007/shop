import {AfterViewInit, Component, ElementRef, OnInit, Renderer2, ViewChildren} from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  askItem = '▲';
  descItem = '▼';
  notItem = ' ';


  constructor(private el: ElementRef, private r: Renderer2) {
  }

  ngOnInit() {
  }


  updateSort(event) {
    const classIndex =  (event.target.className).indexOf('cellSort');
    let itemActive = '';
    if (classIndex < 0) {
      itemActive = event.target.parent;
    } else {

    }
    console.log(classIndex)


    console.log(event);

    /*
    console.log(event);
    const tabActive = document.getElementById(event);
    let tabActiveData = tabActive.dataset.sort;
    const tabs = document.getElementsByClassName('cellSort');

    let activeSort = '';
    if (tabActiveData === 'desc' || tabActiveData === '') {
      tabActive.dataset.sort = 'ask';
      console.log('child', tabActive.children);
      activeSort = 'ask';
    } else {
      tabActiveData = 'desc';
      activeSort = 'desc';
    }

    console.log(tabActive.dataset.id);
  }
  */


  }
}
