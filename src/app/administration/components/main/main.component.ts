import {Component, Input, OnInit} from '@angular/core';
import {GetCategoryInterface, GetSubcategoryInterface, TokensInterface} from '../../interfaces/interfaces';
import {GetService} from '../../services/requests/get.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  @Input()
  rows: number;  /*Количество строк*/
  page: number; /*Страница*/
  sortName: string; /*Поле сортировки*/
  sortValue: string; /*Значение сортировки ASC или DESC*/
  searchName: string; /*Значение поля поиск*/
  searchCatagory: string;

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

    if (this.router.url === '/administration/reference/subcategory') {
      this.getSubcategory({rows: 1, page: 1, sortName: 'id', sortValue: 'ASC', searchCatagory: 'Смартфоны', searchName: 'ПоискСубкатегория'}, {AccessAdmin: 'access', RefreshAdmin: 'refresh'});
    }

    if (this.router.url === '/administration/reference/category') {
      this.getCategory({rows: 1, page: 1, sortName: 'id', sortValue: 'ASC',  searchName: 'ПоискКатегори'}, {AccessAdmin: 'access', RefreshAdmin: 'refresh'});
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

}
