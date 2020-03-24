export interface TabsInterface {
  url: string;
  tabArr: string[][];
  name: string[];
}

export interface GetCategoryInterface {
  rows: number;
  page: number;
  sortName: string;
  sortValue: string;
  searchName?: string;
}

export interface TokensInterface {
  AccessAdmin: string;
  RefreshAdmin: string;
}
