/*Интерфейс для вывода вкладок*/
export interface TabsInterface {
  url: string;
  tabArr: string[][];
  name: string[];
}

/*Интрефес для вывода таблицы Категория*/
export interface GetCategoryInterface {
  rows: number;
  page: number;
  sortName: string;
  sortValue: string;
  searchName?: string;
}

/*Интрефес для вывода таблицы Субкатегория*/
export interface GetSubcategoryInterface {
  rows: number;
  page: number;
  sortName: string;
  sortValue: string;
  searchCatagory?: string;
  searchName?: string;
}

/*Интрефес для вывода таблицы Фирма*/
export interface GetFirmInterface {
  rows: number;
  page: number;
  sortName: string;
  sortValue: string;
  searchName?: string;
}

/*Интурфейт для передачи токенов*/
export interface TokensInterface {
  AccessAdmin: string;
  RefreshAdmin: string;
}
