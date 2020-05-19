import {Component, EventEmitter, OnChanges, OnInit, Output} from '@angular/core';



@Component({
  selector: 'app-count',
  templateUrl: './count.component.html',
  styleUrls: ['./count.component.scss']
})
export class CountComponent implements OnInit, OnChanges {
  @Output() rowsUpt: EventEmitter<object> = new EventEmitter<object>()



  constructor() { }

  ngOnInit() {

  }

  ngOnChanges(): void {
  }

  updateSort(event) {
    this.rowsUpt.emit({rows: event.target.value});
  }

}
