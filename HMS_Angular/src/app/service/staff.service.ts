import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { CommonService } from './common.service';
import { WEBAPPLOGIN } from '../constants/constants';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class StaffService {
  baseUrl: string;
  token:any;

  constructor(private http: HttpClient, private CommonService: CommonService) {
    this.baseUrl = CommonService.BASE_URL;
    this.token = localStorage.getItem("token");
  }

  createStaff(params)
  {
    var url: any;
    url = this.baseUrl + "api/Staffs/InsertStaff";

    let headers = new HttpHeaders().set('Content-Type', 'application/json').set('Authorization', `Bearer ${this.token}`);
    return this.http.post<any>(url, params, { headers }).pipe(map(
      data => {
        return data;
      }
      , error => console.log("Error: ", error)))
  }

  updateStaff(params)
  {
    var url: any;
    url = this.baseUrl + "api/Staffs/UpdateStaff";

    let headers = new HttpHeaders().set('Content-Type', 'application/json').set('Authorization', `Bearer ${this.token}`);
    return this.http.put<any>(url, params, { headers }).pipe(map(
      data => {
        return data;
      }
      , error => console.log("Error: ", error)))
  }

  getStaff()
  {
    var url: any;
    url = this.baseUrl + "api/Staffs/GetAllStaff";

    let headers = new HttpHeaders().set('Content-Type', 'application/json').set('Authorization', `Bearer ${this.token}`);
    return this.http.get<any>(url ,{ headers }).pipe(map(
      data => {
        return data;
      }
      , error => console.log("Error: ", error)))
  }

  getSingleStaff(id)
  {
    var url: any;
    url = this.baseUrl + "api/Staffs/GetStaffById?Id="+id;

    let headers = new HttpHeaders().set('Content-Type', 'application/json').set('Authorization', `Bearer ${this.token}`);
    return this.http.get<any>(url ,{ headers }).pipe(map(
      data => {
        return data;
      }
      , error => console.log("Error: ", error)))
  }

  deleteStaff(id)
  {
    var url: any;
    url = this.baseUrl + "api/Staffs/DeleteStaff?Id="+id;

    let headers = new HttpHeaders().set('Content-Type', 'application/json').set('Authorization', `Bearer ${this.token}`);
    return this.http.delete<any>(url ,{ headers }).pipe(map(
      data => {
        return data;
      }
      , error => console.log("Error: ", error)))
  }
}
