import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { CommonService } from './common.service';
import { WEBAPPLOGIN } from '../constants/constants';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class AdminService {
  baseUrl: string;
  constructor(private http: HttpClient, private CommonService: CommonService) {
    this.baseUrl = CommonService.BASE_URL;
  }

  adminlogin(response) {
    var url: any;
    url = this.baseUrl + "api/Token/login";
    const headers = new HttpHeaders().set('Content-Type', 'application/json')
    return this.http.post<any>(url, response, { headers, responseType: 'text' as 'json' }).pipe(map(
      data => {
        return data;
      }
      , error => console.log("Error: ", error)))
  }

}
