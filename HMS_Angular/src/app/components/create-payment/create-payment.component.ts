import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PaymentService } from 'src/app/service/payment.service';
import { CookieService } from 'ngx-cookie-service';
import Swal from 'sweetalert2';

declare let Email:any;

@Component({
  selector: 'app-create-payment',
  templateUrl: './create-payment.component.html',
  styleUrls: ['./create-payment.component.css']
})
export class CreatePaymentComponent implements OnInit {
  CreatePayment : FormGroup;
  Submitted = false;
  constructor(private formBuilder: FormBuilder, private activeroute: ActivatedRoute, private router: Router, private cookies: CookieService, private PaymentService: PaymentService) { }

  ngOnInit(): void {
    this.CreatePayment = this.formBuilder.group({
      cardholderName: ['',Validators.required],
      cardNumber: ['',Validators.required],
      Email: ['',Validators.required]
  });
  }

  get f() { return this.CreatePayment.controls; }

  async onSubmit(paymentCreateForm: NgForm) {
    this.Submitted = true;
    if(this.CreatePayment.invalid)
    {
      return; 
    }

    let json: any = {};
    json.cardholderName = paymentCreateForm.value.cardholderName;
    json.cardNumber = paymentCreateForm.value.cardNumber;
    json.email = paymentCreateForm.value.Email;

    this.PaymentService.createPayment(json).subscribe(data => {
      Swal.fire({
        position: 'top-end',
        title: 'info <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#17a2b8"  stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-alert-circle">  <circle cx="12" cy="12" r="10"></circle>  <line x1="12" y1="8" x2="12" y2="12"></line>   <line x1="12" y1="16" x2="12.01" y2="16"></line></svg>',
        text: 'Payment Registered Successfully',
        showConfirmButton: false,
        timer: 1500
      }).then(()=>{
        this.router.navigate(['/', 'listPayment']);
      })
    })

    
  }

  cancelform()
  {
    this.router.navigate(['/', 'listPayment']);
  }
}
