import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { CommonService } from './common.service';
import { WEBAPPLOGIN } from '../constants/constants';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RateService {
  baseUrl: string;
  token:any;

  constructor(private http: HttpClient, private CommonService: CommonService) {
    this.baseUrl = CommonService.BASE_URL;
    this.token = localStorage.getItem("token");
  }

  createRate(params)
  {
    var url: any;
    url = this.baseUrl + "api/Rate/InsertRate";

    let headers = new HttpHeaders().set('Content-Type', 'application/json').set('Authorization', `Bearer ${this.token}`);
    return this.http.post<any>(url, params, { headers }).pipe(map(
      data => {
        return data;
      }
      , error => console.log("Error: ", error)))
  }

  updateRate(params)
  {
    var url: any;
    url = this.baseUrl + "api/Rate/UpdateRate";

    let headers = new HttpHeaders().set('Content-Type', 'application/json').set('Authorization', `Bearer ${this.token}`);
    return this.http.put<any>(url, params, { headers }).pipe(map(
      data => {
        return data;
      }
      , error => console.log("Error: ", error)))
  }

  getRate()
  {
    var url: any;
    url = this.baseUrl + "api/Rate/GetAllRate";

    let headers = new HttpHeaders().set('Content-Type', 'application/json').set('Authorization', `Bearer ${this.token}`);
    return this.http.get<any>(url ,{ headers }).pipe(map(
      data => {
        return data;
      }
      , error => console.log("Error: ", error)))
  }

  getSingleRate(id)
  {
    var url: any;
    url = this.baseUrl + "api/Rate/GetRateById?Id="+id;

    let headers = new HttpHeaders().set('Content-Type', 'application/json').set('Authorization', `Bearer ${this.token}`);
    return this.http.get<any>(url ,{ headers }).pipe(map(
      data => {
        return data;
      }
      , error => console.log("Error: ", error)))
  }

  deleteRate(id)
  {
    var url: any;
    url = this.baseUrl + "api/Rate/DeleteRate?Id="+id;

    let headers = new HttpHeaders().set('Content-Type', 'application/json').set('Authorization', `Bearer ${this.token}`);
    return this.http.delete<any>(url ,{ headers }).pipe(map(
      data => {
        return data;
      }
      , error => console.log("Error: ", error)))
  }
}
