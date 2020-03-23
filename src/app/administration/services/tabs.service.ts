import { Injectable } from '@angular/core';
import {Route, RouterLinkActive} from '@angular/router';
import {Subject, Observable} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class TabsService {
  private subject = new Subject<any>();

}
