import {Component, Input, OnInit} from '@angular/core';
import {GetCategoryInterface, TokensInterface} from '../../interfaces/interfaces';
import {GetService} from '../../services/requests/get.service';

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
    searchName: this.searchName
  };

  constructor(private getService: GetService) { }

  ngOnInit() {}

  getCategory() {
    this.getService.getCategoryService(this.getCategoryParametrs, this.getHeaders)
      .subscribe(response => {
        console.log(response);
      });
  }

}
