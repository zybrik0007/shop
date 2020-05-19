import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-buttons',
  templateUrl: './buttons.component.html',
  styleUrls: ['./buttons.component.scss']
})
export class ButtonsComponent implements OnInit {

  timeItem: any;
  timeOut(event) {
    this.timeItem = setTimeout(() => {this. searchUpt.emit({searchName: event})}, 2000);
  }
  timeClear() {
    clearTimeout(this.timeItem);
  }

  @Output() searchUpt: EventEmitter<object> = new EventEmitter<object>();

  constructor() { }

  ngOnInit() {
  }


  searchSort(event) {
    this.timeClear();
    if (event.target.value.trim() !== '' || event.target.value !== '') {
      this.timeOut(event.target.value);
    }
  }
}
