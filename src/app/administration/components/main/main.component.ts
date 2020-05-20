import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';
import {GetCategoryInterface, GetSubcategoryInterface, GetFirmInterface, GetNomenclatureInterface, TokensInterface} from '../../interfaces/interfaces';
import {GetService} from '../../services/requests/get.service';
import {PageService} from '../../services/page.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  countStr: number;
  countRows: number;


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
    private pageService: PageService,
    private router: Router) { }

  ngOnInit() {

    this.rows = 20;
    this.page = 1;
    this.sortName = 'id';
    this.sortValue = 'ASC';
    this.searchCategory = '';
    this.searchName = '';
    this.searchSubcategory = '';

    this.countRows = this.rows;

    /*Первичная инициализация таблицы номенклатур*/
    if (this.router.url === '/administration/reference/nomenclature') {
      this.getNomenclature(
        {rows: this.rows, page: this.page, sortName: this.sortName,  sortValue: this.sortValue,  searchName: this.searchName, searchCatagory: this.searchCategory, searchSubcatagory: this.searchSubcategory},
        {AccessAdmin: 'access', RefreshAdmin: 'refresh'}
      );
      this.countStr = 5000;
    }

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

    /*Первичная инициализация таблицы фирм*/
    if (this.router.url === '/administration/reference/firm') {
      this.getFirm(
        {rows: this.rows, page: this.page, sortName: this.sortName,  sortValue: this.sortValue,  searchName: this.searchName},
        {AccessAdmin: 'access', RefreshAdmin: 'refresh'});
    }
  }


  /*Функции выборки данный для таблиц по араметрам*/
  /*Выбока номенклатур*/
  getNomenclature(getParametr: GetNomenclatureInterface, getTokens: TokensInterface) {
    this.getService.getNomenclatureService(getParametr, getTokens)
      .subscribe(response => {}, error => {
        console.log('Ошибка вывода таблицы номенклатуры');
      });
  }

  /*Выборка категорий*/
  getCategory(getParametr: GetCategoryInterface, getTokens: TokensInterface) {
    this.getService.getCategoryService(getParametr, getTokens)
      .subscribe(response => {}, error => {
        console.log('Ошибка вывода таблицы категории');
      });
  }

  /*Выборка субкатегорий*/
  getSubcategory(getParametr: GetSubcategoryInterface, getTokens: TokensInterface) {
    this.getService.getSubcategoryService(getParametr, getTokens)
      .subscribe(response => {}, error => {
        console.log('Ошибка вывода таблицы субкатегории');
      });
  }

  /*Выборка фирм*/
  getFirm(getParametr: GetFirmInterface, getTokens: TokensInterface) {
    this.getService.getFirmService(getParametr, getTokens)
      .subscribe(response => {}, error => {
        console.log('Ошибка вывода таблицы фирмы');
      });
  }

  /******************************************/
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

    /*Фильтрация таблицы номенклатур*/
    if (this.router.url === '/administration/reference/nomenclature') {
      this.getNomenclature(
        {rows: this.rows, page: this.page, sortName: this.sortName,  sortValue: this.sortValue,  searchName: this.searchName, searchCatagory: this.searchCategory, searchSubcatagory: this.searchSubcategory},
        {AccessAdmin: 'access', RefreshAdmin: 'refresh'}
      );
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

    /*Фильтрация таблицы фирм*/
    if (this.router.url === '/administration/reference/firm') {
      this.getFirm(
        {rows: this.rows, page: this.page, sortName: this.sortName,  sortValue: this.sortValue,  searchName: this.searchName},
        {AccessAdmin: 'access', RefreshAdmin: 'refresh'});
    }

  }


}
