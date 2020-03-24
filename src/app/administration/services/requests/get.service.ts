import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams, HttpResponse} from '@angular/common/http';
import {GetCategoryInterface, TokensInterface} from '../../interfaces/interfaces';
import {Observable} from 'rxjs';
import {environment} from '../../../../environments/environment';

@Injectable({providedIn: 'root'})
export class GetService {



  constructor(
    private http: HttpClient) {}

    /*get запрос на сервер для Категорий*/
    getCategoryService(req: GetCategoryInterface, tokens: TokensInterface): Observable<object> {

    /*Определение url*/
    const url: string = environment.urlServer + 'category';

    /*Определение Headers*/
    let headers = new HttpHeaders();
    headers = headers.append('AccessAdmin', tokens.AccessAdmin);
    headers = headers.append('RefreshAdmin', tokens.RefreshAdmin);

    /*Определение QueryParametrs*/
    let params = new HttpParams();
    params = params.append('rows', (req.rows).toString());
    params = params.append('page', (req.page).toString());
    params = params.append('sortName', req.sortName);
    params = params.append('sortValue', req.sortValue);
    params = params.append('searchName', req.searchName);

    /*Выполнение запроса на сервер*/
    return this.http.get<Observable<Response>>(url, {
        headers,
        params,
        observe: 'response'
    })
  }
}
