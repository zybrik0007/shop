import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {GetCategoryInterface, GetSubcategoryInterface, GetFirmInterface, GetNomenclatureInterface, TokensInterface} from '../../interfaces/interfaces';
import {GetService} from '../../services/requests/get.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  @Input() rows: number;  /*Количество строк*/
  @Input() page: number; /*Страница*/
  @Input() sortName: string; /*Поле сортировки*/
  @Input() sortValue: string; /*Значение сортировки ASC или DESC*/
  @Input() searchName: string; /*Значение поля поиск*/
  @Input() searchCategory: string; /*Значение поля категория*/
  @Input() searchSubcategory: string; /*Значение поля субкатегория*/

  /*Переменная с токенами для request запроса*/
  getHeaders: TokensInterface = {
    AccessAdmin: localStorage.getItem('AccessAdmin'),
    RefreshAdmin: localStorage.getItem('RefreshAdmin')
  };


  constructor(
    private getService: GetService,
    private router: Router) { }

  ngOnInit() {

    this.rows = 20;
    this.page = 1;
    this.sortName = 'id';
    this.sortValue = 'ASC';
    this.searchCategory = '';
    this.searchName = '';
    this.searchSubcategory = '';

    /*Первичная инициализация таблицы категорий*/
    if (this.router.url === '/administration/reference/category') {
      this.getCategory(
        {rows: this.rows, page: this.page, sortName: this.sortName,  sortValue: this.sortValue,  searchName: this.searchName},
        {AccessAdmin: 'access', RefreshAdmin: 'refresh'});
    }

    /*Первичная инициализация таблицы субкатегорий*/
    if (this.router.url === '/administration/reference/subcategory') {
      this.getSubcategory(
        {rows: this.rows, page: this.page, sortName: this.sortName,  sortValue: this.sortValue,  searchName: this.searchName, searchCatagory: this.searchCategory},
        {AccessAdmin: 'access', RefreshAdmin: 'refresh'}
      );
    }

  }


  /*Функции выборки данный для таблиц по араметрам*/
  /*Выбока номенклатур*/
  getNomenclature(getParametr: GetNomenclatureInterface, getTokens: TokensInterface) {}



  /*Выборка категорий*/
  getCategory(getParametr: GetCategoryInterface, getTokens: TokensInterface) {
    this.getService.getCategoryService(getParametr, getTokens)
      .subscribe(response => {}, error => {
        console.log('Ошибка отправки категория');
      });
  }

  /*Выборка субкатегорий*/
  getSubcategory(getParametr: GetSubcategoryInterface, getTokens: TokensInterface) {
    this.getService.getSubcategoryService(getParametr, getTokens)
      .subscribe(response => {}, error => {
        console.log('Ошибка отправки субкатегория');
      });
  }


    /*Изменение таблицы с наложением фильтров*/
  updateTable(event) {
    /*Определнеие массива названия ключей, event-объекта*/
    const EventArr = Object.keys(event);
    /*Определение по каким параметрам будет выборка и обвноление таблицы*/
    for (const element of EventArr) {
      switch (element) {
        case 'sortName': {
          this.sortName = event.sortName;
          break;
        }
        case 'sortValue': {
          this.sortValue = event.sortValue;
          break;
        }
        case 'rows': {
          this.rows = event.rows;
          break;
        }
        case 'page': {
          this.page = event.page;
          break;
        }
        case 'searchName': {
          this.searchName = event.searchName;
          break;
        }
        case 'searchCategory': {
          this.searchCategory = event.searchCategory;
          break;
        }
        case 'searchSubcategory': {
          this.searchSubcategory = event.searchSubcategory;
          break;
        }
      }
    }

    /*Фильтрация таблицы категорий*/
    if (this.router.url === '/administration/reference/category') {
      this.getCategory(
        {rows: this.rows, page: this.page, sortName: this.sortName,  sortValue: this.sortValue,  searchName: this.searchName},
        {AccessAdmin: 'access', RefreshAdmin: 'refresh'});
    }

    /*Фильтрация таблицы субкатегорий*/
    if (this.router.url === '/administration/reference/subcategory') {
      this.getSubcategory(
        {rows: this.rows, page: this.page, sortName: this.sortName,  sortValue: this.sortValue,  searchName: this.searchName, searchCatagory: this.searchCategory},
        {AccessAdmin: 'access', RefreshAdmin: 'refresh'}
      );
    }

  }


}
