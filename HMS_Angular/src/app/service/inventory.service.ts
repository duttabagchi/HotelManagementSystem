import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { CommonService } from './common.service';
import { WEBAPPLOGIN } from '../constants/constants';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class InventoryService {
  baseUrl: string;
  token:any;

  constructor(private http: HttpClient, private CommonService: CommonService) {
    this.baseUrl = CommonService.BASE_URL;
    this.token = localStorage.getItem("token");
  }

  createInventory(params)
  {
    var url: any;
    url = this.baseUrl + "api/Inventory/InsertInventory";

    let headers = new HttpHeaders().set('Content-Type', 'application/json').set('Authorization', `Bearer ${this.token}`);
    return this.http.post<any>(url, params, { headers }).pipe(map(
      data => {
        return data;
      }
      , error => console.log("Error: ", error)))
  }

  updateInventory(params)
  {
    var url: any;
    url = this.baseUrl + "api/Inventory/UpdateInventory";

    let headers = new HttpHeaders().set('Content-Type', 'application/json').set('Authorization', `Bearer ${this.token}`);
    return this.http.put<any>(url, params, { headers }).pipe(map(
      data => {
        return data;
      }
      , error => console.log("Error: ", error)))
  }

  getInventory()
  {
    var url: any;
    url = this.baseUrl + "api/Inventory/GetAllInventories";

    let headers = new HttpHeaders().set('Content-Type', 'application/json').set('Authorization', `Bearer ${this.token}`);
    return this.http.get<any>(url ,{ headers }).pipe(map(
      data => {
        return data;
      }
      , error => console.log("Error: ", error)))
  }

  getSingleInventory(id)
  {
    var url: any;
    url = this.baseUrl + "api/Inventory/GetInventoryById?Id="+id;

    let headers = new HttpHeaders().set('Content-Type', 'application/json').set('Authorization', `Bearer ${this.token}`);
    return this.http.get<any>(url ,{ headers }).pipe(map(
      data => {
        return data;
      }
      , error => console.log("Error: ", error)))
  }

  deleteInventory(id)
  {
    var url: any;
    url = this.baseUrl + "api/Inventory/DeleteInventory?Id="+id;

    let headers = new HttpHeaders().set('Content-Type', 'application/json').set('Authorization', `Bearer ${this.token}`);
    return this.http.delete<any>(url ,{ headers }).pipe(map(
      data => {
        return data;
      }
      , error => console.log("Error: ", error)))
  }
}
