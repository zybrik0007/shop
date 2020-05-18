import {AfterViewInit, Component, ElementRef, EventEmitter, OnInit, Output, Renderer2, ViewChildren} from '@angular/core';
import {of} from 'rxjs';
import {Router} from '@angular/router';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  /*Значение визуальной сортирвки*/
  askItem = '▲';
  descItem = '▼';
  notItem = ' ';
  /*Заглавие всех столбцов*/
  ElementsSort: HTMLCollectionOf<Element> = document.getElementsByClassName('cellSort');
  /*Переменные для отображения визуализации сортировки в столбцах*/
  NumberSort: string = this.notItem;
  NameSort: string = this.notItem;
  CategorySort: string = this.notItem;
  SubcategorySort: string = this.notItem;
  FirmSort: string = this.notItem;
  /*Переменная для определение заглваия столбцов*/
  HeadColumnUrl: string;


  @Output() sortColumn: EventEmitter<object> = new EventEmitter<object>();

  constructor(private el: ElementRef,
              private r: Renderer2,
              private router: Router) {}

  ngOnInit() {
    if (this.router.url === '/administration/reference/nomenclature') {
      this.HeadColumnUrl = 'nomenclature';
    }

    if (this.router.url === '/administration/reference/category') {
      this.HeadColumnUrl = 'category';
    }

    if (this.router.url === '/administration/reference/subcategory') {
      this.HeadColumnUrl = 'subcategory';
    }

    if (this.router.url === '/administration/reference/firm') {
      this.HeadColumnUrl = 'firm';
    }

  }


  /*Функция сортировки таблицы, при нажатии на шапку стобцы*/
  updateSort(event) {
    /*Проверка и приведенеи у нужному dom элементу*/
    const classIndex =  (event.target.className).indexOf('cellSort');
    let itemActive: HTMLElement;
    if (classIndex < 0) {
      const classIndexParent = (event.target.className).indexOf('cellSort');
      if (classIndexParent < 0) {
        itemActive = (event.target.parentElement).parentElement;
      } else {
        itemActive = event.target.parentElement;
      }
    } else {
      itemActive = event.target;
    }

    /*Активное значение сортировки, название обрабатываемого столбца, значение изменяемой сортировки, визуализация изменямой сортировки*/
    const ActiveSort: string = itemActive.dataset.sort;
    const ActiveColumn: string = itemActive.dataset.id;
    let UpdateSort = '';
    let UpdateSortAnimation = '';
    console.log('itemActive.dataset: ', itemActive.dataset);

    /*Убрать визуальное отображаение у всех столбцов*/
    this.NumberSort = this.NameSort = this.CategorySort = this.SubcategorySort = this.FirmSort = this.notItem;

    /*Убрать значение сортировки у всех стобцов*/
    for (const elem of Object(this.ElementsSort)) {
      elem.dataset.sort = '';
    }

    /*Добавление значение сортировки, значение переменной измененной, значение переменной визуализации сортировки*/
    if (ActiveSort === ' ' || ActiveSort === 'ASC') {
      itemActive.dataset.sort = 'DESC';
      UpdateSort = 'DESC';
      UpdateSortAnimation = this.descItem;
    } else {
      itemActive.dataset.sort = 'ASC';
      UpdateSort = 'ASC';
      UpdateSortAnimation = this.askItem;
    }
    console.log('ActiveColumn: ', ActiveColumn);

    /*Определение столца визуализации сортировкий*/
    switch (ActiveColumn) {
      case 'number' : {
        this.NumberSort = UpdateSortAnimation;
        break;
      }
      case 'name' : {
        this.NameSort = UpdateSortAnimation;
        break;
      }
      case 'category' : {
        this.CategorySort = UpdateSortAnimation;
        break;
      }
      case 'subcategory' : {
        this.SubcategorySort = UpdateSortAnimation;
        break;
      }
      case 'firm' : {
        this.FirmSort = UpdateSortAnimation;
        break;
      }
    }
    this.sortColumn.emit({sortName: ActiveColumn, sortValue: UpdateSort});
  }
}
