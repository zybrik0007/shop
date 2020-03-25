import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {GetCategoryInterface, GetSubcategoryInterface, GetFirmInterface, TokensInterface} from '../../interfaces/interfaces';
import {Observable} from 'rxjs';
import {environment} from '../../../../environments/environment';

@Injectable({providedIn: 'root'})
export class GetService {

  constructor(
    private http: HttpClient) {}

    /**********Функция определения для заголовков get Запрсов**********/
    getHeaders(getHead: TokensInterface) {
      let headersGet =  new HttpHeaders();
      headersGet =  headersGet.append('AccessAdmin', getHead.AccessAdmin);
      headersGet =  headersGet.append('RefreshAdmin', getHead.RefreshAdmin);
      headersGet =  headersGet.append('Accept', 'application/json, text/plain, */*');
      return headersGet;
    }

    /******************************************************/
    /**********get запрос на сервер для Категорий**********/
    /*******************************************************/
    getCategoryService(req: GetCategoryInterface, tokens: TokensInterface): Observable<object> {

    /*Определение url*/
    const url: string = environment.urlServer + 'category';

    /*Определение Headers*/
    const headers = this.getHeaders(tokens);

    /*Определение QueryParametrs*/
    let params = new HttpParams();
    params = params.append('rows', (req.rows).toString());
    params = params.append('page', (req.page).toString());
    params = params.append('sortName', req.sortName);
    params =  params.append('sortValue', req.sortValue);
    params =  params.append('searchName', req.searchName);

    /*Выполнение запроса на сервер*/
    return this.http.get<Observable<Response>>(url, {
        headers,
        params,
        observe: 'response'
    });
  }

  /******************************************************/
  /**********get запрос на сервер для Субкатегорий**********/
  /*******************************************************/
  getSubcategoryService(req: GetSubcategoryInterface, tokens: TokensInterface): Observable<object> {

    /*Определение url*/
    const url1: string = environment.urlServer + 'subcategory';

    /*Определение Headers*/
    const headers = this.getHeaders(tokens);

    /*Определение QueryParametrs*/
    let params = new HttpParams();
    params = params.append('rows', (req.rows).toString());
    params = params.append('page', (req.page).toString());
    params = params.append('sortName', req.sortName);
    params =  params.append('sortValue', req.sortValue);
    params = params.append('searchCatagory', req.searchCatagory);
    params =  params.append('searchName', req.searchName);

    /*Выполнение запроса на сервер*/
    return this.http.get<Observable<Response>>(url1, {
      headers,
      params,
      observe: 'response'
    });
  }

  /******************************************************/
  /**********get запрос на сервер для Фирм**********/
  /*******************************************************/
  getFirmService(req: GetFirmInterface, tokens: TokensInterface): Observable<object> {

    /*Определение url*/
    const url: string = environment.urlServer + 'firm';

    /*Определение Headers*/
    const headers = this.getHeaders(tokens);

    /*Определение QueryParametrs*/
    let params = new HttpParams();
    params = params.append('rows', (req.rows).toString());
    params = params.append('page', (req.page).toString());
    params = params.append('sortName', req.sortName);
    params =  params.append('sortValue', req.sortValue);
    params =  params.append('searchName', req.searchName);

    /*Выполнение запроса на сервер*/
    return this.http.get<Observable<Response>>(url, {
      headers,
      params,
      observe: 'response'
    });
  }

}
