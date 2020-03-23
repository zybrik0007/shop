import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';

@Injectable({providedIn: 'root'})
export class GetService {
  constructor(
    // test
    private http: HttpClient) {}
}
