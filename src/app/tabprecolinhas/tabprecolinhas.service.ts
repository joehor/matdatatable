import { Injectable } from '@angular/core';
import { Tabpreco } from './../models/tabprecomodel.module';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TabprecolinhasService {
  private serviceUrl = '../../assets/json/tabpreco-linhas.json';

  constructor(private http: HttpClient) { }

  getData(): Observable<Tabpreco[]> {
    return this.http.get<Tabpreco[]>(this.serviceUrl);
  }
}
