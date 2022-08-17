import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CommonService } from './common.service';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ReservationService {
  baseUrl: string;
  token:any;

  constructor(private http: HttpClient, private CommonService: CommonService) { 
    this.baseUrl = CommonService.BASE_URL;
    this.token = localStorage.getItem("token");
  }

  createReservation(params)
  {
    var url: any;
    url = this.baseUrl + "api/Reservation/InsertReservation";

    let headers = new HttpHeaders().set('Content-Type', 'application/json').set('Authorization', `Bearer ${this.token}`);
    return this.http.post<any>(url, params, { headers }).pipe(map(
      data => {
        return data;
      }
      , error => console.log("Error: ", error)))
  }

  updateReservation(params)
  {
    var url: any;
    url = this.baseUrl + "api/Reservation/UpdateReservation";

    let headers = new HttpHeaders().set('Content-Type', 'application/json').set('Authorization', `Bearer ${this.token}`);
    return this.http.put<any>(url, params, { headers }).pipe(map(
      data => {
        return data;
      }
      , error => console.log("Error: ", error)))
  }

  getReservation()
  {
    var url: any;
    url = this.baseUrl + "api/Reservation/GetAllReservations";

    let headers = new HttpHeaders().set('Content-Type', 'application/json').set('Authorization', `Bearer ${this.token}`);
    return this.http.get<any>(url ,{ headers }).pipe(map(
      data => {
        return data;
      }
      , error => console.log("Error: ", error)))
  }

  getSingleReservation(id)
  {
    var url: any;
    url = this.baseUrl + "api/Reservation/GetReservationById?Id="+id;

    let headers = new HttpHeaders().set('Content-Type', 'application/json').set('Authorization', `Bearer ${this.token}`);
    return this.http.get<any>(url ,{ headers }).pipe(map(
      data => {
        return data;
      }
      , error => console.log("Error: ", error)))
  }

  deleteReservation(id)
  {
    var url: any;
    url = this.baseUrl + "api/Reservation/DeleteReservation?Id="+id;

    let headers = new HttpHeaders().set('Content-Type', 'application/json').set('Authorization', `Bearer ${this.token}`);
    return this.http.delete<any>(url ,{ headers }).pipe(map(
      data => {
        return data;
      }
      , error => console.log("Error: ", error)))
  }

}
