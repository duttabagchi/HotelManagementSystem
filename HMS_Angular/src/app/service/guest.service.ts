import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CommonService } from './common.service';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class GuestService {

  baseUrl: string;
  token:any;

  constructor(private http: HttpClient, private CommonService: CommonService) {
    this.baseUrl = CommonService.BASE_URL;
    this.token = localStorage.getItem("token");
  } 
  
  createGuest(params)
  {
    var url: any;
    url = this.baseUrl + "api/Guest/InsertGuest";

    let headers = new HttpHeaders().set('Content-Type', 'application/json').set('Authorization', `Bearer ${this.token}`);
    return this.http.post<any>(url, params, { headers }).pipe(map(
      data => {
        return data;
      }
      , error => console.log("Error: ", error)))
  }

  updateGuest(params)
  {
    var url: any;
    url = this.baseUrl + "api/Guest/UpdateGuest";

    let headers = new HttpHeaders().set('Content-Type', 'application/json').set('Authorization', `Bearer ${this.token}`);
    return this.http.put<any>(url, params, { headers }).pipe(map(
      data => {
        return data;
      }
      , error => console.log("Error: ", error)))
  }

  getGuest()
  {
    var url: any;
    url = this.baseUrl + "api/Guest/GetAllGuests";

    let headers = new HttpHeaders().set('Content-Type', 'application/json').set('Authorization', `Bearer ${this.token}`);
    return this.http.get<any>(url ,{ headers }).pipe(map(
      data => {
        return data;
      }
      , error => console.log("Error: ", error)))
  }

  getSingleGuest(id)
  {
    var url: any;
    url = this.baseUrl + "api/Guest/GetGuestById?Id="+id;

    let headers = new HttpHeaders().set('Content-Type', 'application/json').set('Authorization', `Bearer ${this.token}`);
    return this.http.get<any>(url ,{ headers }).pipe(map(
      data => {
        return data;
      }
      , error => console.log("Error: ", error)))
  }

  deleteGuest(id)
  {
    var url: any;
    url = this.baseUrl + "api/Guest/DeleteGuest?Id="+id;

    let headers = new HttpHeaders().set('Content-Type', 'application/json').set('Authorization', `Bearer ${this.token}`);
    return this.http.delete<any>(url ,{ headers }).pipe(map(
      data => {
        return data;
      }
      , error => console.log("Error: ", error)))
  }

}
