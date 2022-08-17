import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from "rxjs";
import { PaymentService } from 'src/app/service/payment.service';

@Component({
  selector: 'app-list-payment',
  templateUrl: './list-payment.component.html',
  styleUrls: ['./list-payment.component.css']
})
export class ListPaymentComponent implements OnInit {
  public loading = false;
  paymentDataList:any = [];
  dtOptions: DataTables.Settings = {
    order: [],
    columnDefs: [{ targets: [1], orderable: false }],
  };
  dtTrigger: Subject<any> = new Subject<any>();
  constructor(public router: Router,
    private PaymentService: PaymentService) { }

  ngOnInit(): void {
    this.PaymentService.getPayment().subscribe(data=>{
      this.paymentDataList = data;
      this.dtTrigger.next();
    })
  }
  ngOnDestroy(): void {
    this.dtTrigger.unsubscribe();
  }

  

  deletePayment(id)
  {
   this.PaymentService.deletePayment(id).subscribe(data=>{
    location.reload();
   })
  }

}
