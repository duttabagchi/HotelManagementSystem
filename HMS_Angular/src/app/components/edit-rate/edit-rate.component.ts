import { HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { generalPath, serverUrl, applicationUrl } from 'src/app/constants/generalConstants';
import { CookieService } from 'ngx-cookie-service';
import { RateService } from 'src/app/service/rate.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-edit-rate',
  templateUrl: './edit-rate.component.html',
  styleUrls: ['./edit-rate.component.css']
})
export class EditRateComponent implements OnInit {
  row_id:any;
  no_of_Days:any;
  extensionPrice:any;
  perNightPrice:any;
  totalAmount:any;
  room_type:any;
  constructor(private formBuilder: FormBuilder, private activeroute: ActivatedRoute, private router: Router, private cookies: CookieService, private RateService: RateService) { }

  ngOnInit(): void {
    this.row_id  = this.activeroute.snapshot.params.row_id;
    this.row_id = atob(this.row_id);
    this.getSingleInventoryDetails();
  }

  getSingleInventoryDetails()
  {
    this.RateService.getSingleRate(this.row_id).subscribe(data=>{
      this.no_of_Days = data.no_of_Days;
      this.extensionPrice = data.extensionPrice;
      this.perNightPrice = data.perNightPrice;
      this.totalAmount = data.totalAmount;
      this.room_type = data.room_type;
    })
  }
  async onSubmit(rateEditForm: NgForm) {
    let json: any = {};
    json.rate_id = this.row_id;
    json.no_of_Days = rateEditForm.value.no_of_Days;
    json.extensionPrice = rateEditForm.value.extensionPrice;
    json.perNightPrice = rateEditForm.value.perNightPrice;
    json.room_type = rateEditForm.value.room_type;
    
    json.totalAmount = rateEditForm.value.no_of_Days * rateEditForm.value.perNightPrice + rateEditForm.value.extensionPrice;


    this.RateService.updateRate(json).subscribe(data => {
      Swal.fire({
        position: 'top-end',
        title: 'info <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#17a2b8"  stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-alert-circle">  <circle cx="12" cy="12" r="10"></circle>  <line x1="12" y1="8" x2="12" y2="12"></line>   <line x1="12" y1="16" x2="12.01" y2="16"></line></svg>',
        text: 'Rate Updated Successfully',
        showConfirmButton: false,
        timer: 1500
      }).then(()=>{
        this.router.navigate(['/', 'listRate']);
      })
      
    })
  }

  cancelform()
  {
    this.router.navigate(['/', 'listRate']);
  }
}
