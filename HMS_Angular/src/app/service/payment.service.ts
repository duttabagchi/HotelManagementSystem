import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { CommonService } from './common.service';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {
  baseUrl: string;
  token:any;

  constructor(private http: HttpClient, private CommonService: CommonService) {
    this.baseUrl = CommonService.BASE_URL;
    this.token = localStorage.getItem("token");
  }

  createPayment(params)
  {
    var url: any;
    url = this.baseUrl + "api/Payment/InsertPayment";

    let headers = new HttpHeaders().set('Content-Type', 'application/json').set('Authorization', `Bearer ${this.token}`);
    return this.http.post<any>(url, params, { headers }).pipe(map(
      data => {
        return data;
      }
      , error => console.log("Error: ", error)))
  }

  updatePayment(params)
  {
    var url: any;
    url = this.baseUrl + "api/Payment/UpdatePayment";

    let headers = new HttpHeaders().set('Content-Type', 'application/json').set('Authorization', `Bearer ${this.token}`);
    return this.http.put<any>(url, params, { headers }).pipe(map(
      data => {
        return data;
      }
      , error => console.log("Error: ", error)))
  }

  getPayment()
  {
    var url: any;
    url = this.baseUrl + "api/Payment/GetAllPayment";

    let headers = new HttpHeaders().set('Content-Type', 'application/json').set('Authorization', `Bearer ${this.token}`);
    return this.http.get<any>(url ,{ headers }).pipe(map(
      data => {
        return data;
      }
      , error => console.log("Error: ", error)))
  }

  getSinglePayment(id)
  {
    var url: any;
    url = this.baseUrl + "api/Payment/GetPaymentById?Id="+id;

    let headers = new HttpHeaders().set('Content-Type', 'application/json').set('Authorization', `Bearer ${this.token}`);
    return this.http.get<any>(url ,{ headers }).pipe(map(
      data => {
        return data;
      }
      , error => console.log("Error: ", error)))
  }

  deletePayment(id)
  {
    var url: any;
    url = this.baseUrl + "api/Payment/DeletePayment?Id="+id;

    let headers = new HttpHeaders().set('Content-Type', 'application/json').set('Authorization', `Bearer ${this.token}`);
    return this.http.delete<any>(url ,{ headers }).pipe(map(
      data => {
        return data;
      }
      , error => console.log("Error: ", error)))
  }
}
