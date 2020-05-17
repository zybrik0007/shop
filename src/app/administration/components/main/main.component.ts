import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {GetCategoryInterface, GetSubcategoryInterface, TokensInterface} from '../../interfaces/interfaces';
import {GetService} from '../../services/requests/get.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit, OnChanges {

  @Input() rows: number;  /*Количество строк*/
  @Input() page: number; /*Страница*/
  @Input() sortName: string; /*Поле сортировки*/
  @Input() sortValue: string; /*Значение сортировки ASC или DESC*/
  @Input() searchName: string; /*Значение поля поиск*/
  @Input() searchCatagory: string; /*Значение поля категория*/

  /*Переменная с токенами для request запроса*/
  getHeaders: TokensInterface = {
    AccessAdmin: localStorage.getItem('AccessAdmin'),
    RefreshAdmin: localStorage.getItem('RefreshAdmin')
  };

  /*Переменная с параметрами для get запроса таблицы Категорий*/
  getCategoryParametrs: GetCategoryInterface = {
    rows: this.rows,
    page: this.page,
    sortName: this.sortName,
    sortValue: this.sortValue,
    searchName: this.searchName,
  };

  getSubCategoryParametrs: GetSubcategoryInterface = {
    rows: this.rows,
    page: this.page,
    sortName: this.sortName,
    sortValue: this.sortValue,
    searchCatagory: this.searchCatagory,
    searchName: this.searchName
  };

  constructor(
    private getService: GetService,
    private router: Router) { }

  ngOnInit() {

    this.rows = 20;
    this.page = 1;
    this.sortName = 'id';
    this.sortValue = 'ASC';
    this.searchCatagory = '';
    this.searchName = '';


    /*Перчиная инициализация таблицы категорий*/
    if (this.router.url === '/administration/reference/category') {
      this.getCategory(
        {rows: this.rows, page: this.page, sortName: this.sortName,  sortValue: this.sortValue,  searchName: this.searchName},
        {AccessAdmin: 'access', RefreshAdmin: 'refresh'});
    }

    /*Перчиная инициализация таблицы субкатегорий*/
    if (this.router.url === '/administration/reference/subcategory') {
      this.getSubcategory(
        {rows: this.rows, page: this.page, sortName: this.sortName,  sortValue: this.sortValue,  searchName: this.searchName, searchCatagory: this.searchCatagory},
        {AccessAdmin: 'access', RefreshAdmin: 'refresh'}
      );
    }

  }



  getCategory(getParametr: GetCategoryInterface, getTokens: TokensInterface) {
    this.getService.getCategoryService(getParametr, getTokens)
      .subscribe(response => {}, error => {
        console.log('Ошибка отправки категория');
      });
  }

  getSubcategory(getParametr: GetSubcategoryInterface, getTokens: TokensInterface) {
    this.getService.getSubcategoryService(getParametr, getTokens)
      .subscribe(response => {}, error => {
        console.log('Ошибка отправки субкатегория');
      });
  }



  sortdColumn(event) {
    console.log(event);
    console.log('event.sortName ', event.sortName);
    this.sortName = event.sortName;
    this.sortValue = event.sortValue;
    console.log('this.sortName: ', this.sortName);
    console.log('this.sortName: ', this.sortValue);
  }


  ngOnChanges(changes: SimpleChanges) {

    console.log('changes: ', changes);
  }

}
