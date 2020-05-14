import {Component, ElementRef, OnInit, Renderer2} from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  ask = '▲';
  desc = '▼';
  not = ' ';

  test = document.getElementsByClassName('cellSort');


  constructor(private r: Renderer2) {}

  ngOnInit() {
  }

  updateSort(event) {
    for (let i = 0; i < this.test.length; i++) {
      console.log(this.test[i].children);
    }
    console.log(this.test);


  }

}
