import {Component, EventEmitter, OnChanges, OnInit, Output} from '@angular/core';



@Component({
  selector: 'app-count',
  templateUrl: './count.component.html',
  styleUrls: ['./count.component.scss']
})
export class CountComponent implements OnInit, OnChanges {
  @Output() rowsUpt: EventEmitter<number> = new EventEmitter<number>()



  constructor() { }

  ngOnInit() {

  }

  ngOnChanges(): void {
  }

  updateRow(rows: number) {
    console.log('count module', rows);
    this.rowsUpt.emit(rows);
  }

}
