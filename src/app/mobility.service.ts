import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MobilityService {

  accesoDatos = 'https://developer.o2.cz/mobility/sandbox/api/info';
  constructor(public http: HttpClient) { }

  getInfo(): Observable<any> {
    return this.http.get(this.accesoDatos);
  }
}
