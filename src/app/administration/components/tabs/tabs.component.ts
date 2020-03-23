import {AfterViewInit, Component, OnChanges, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {TabsInterface} from '../../interfaces/interfaces';


@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss']
})
export class TabsComponent implements OnInit {
  routerActive: TabsInterface[];
  linkValue: string[][];
  linkName: string[];
  routerTrue: string;
  routerArr: string[];

  tabsObj: TabsInterface[] = [
    {url: '/administration/orders', tabArr: [['/administration', 'orders' , 'orders']], name: ['Заказы']},
    {url: '/administration/goods', tabArr: [['/administration' , 'goods' , 'goods']], name: ['Товары']},
    {url: '/administration/warehouse', tabArr: [['/administration' , 'warehouse' , 'warehouse']], name: ['Склад']},
    {url: '/administration/reference',
      tabArr: [['/administration', 'reference', 'nomenclature'], ['/administration' , 'reference' , 'category']],
      name: ['Номенклатура', 'Категория']},
    {url: '/administration/reference',
      tabArr: [['/administration', 'reference', 'nomenclature'], ['/administration' , 'reference' , 'category']],
      name: ['Номенклатура', 'Категория']},
    {url: '/administration/administration', tabArr: [['/administration', 'administration', 'users']], name: ['Пользователи']},
  ];

  constructor(private router: Router) {}

 ngOnInit(): void {
    this.tabQuantity()
 }




  tabQuantity() {
   this.routerArr = (this.router.url.toString()).split('/');
   this.routerTrue = this.routerArr[0] + '/' + this.routerArr[1] + '/' + this.routerArr[2];
   this.routerActive = this.tabsObj.filter(el => el.url === this.routerTrue);
   this.linkValue = this.routerActive[0].tabArr;
   this.linkName = this.routerActive[0].name;
 }
}
