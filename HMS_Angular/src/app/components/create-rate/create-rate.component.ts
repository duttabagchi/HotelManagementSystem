import { HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { generalPath, serverUrl, applicationUrl } from 'src/app/constants/generalConstants';
import { CookieService } from 'ngx-cookie-service';
import { RateService } from 'src/app/service/rate.service';
import { RoomService } from 'src/app/service/room.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-create-rate',
  templateUrl: './create-rate.component.html',
  styleUrls: ['./create-rate.component.css']
})

export class CreateRateComponent implements OnInit {
  roomDataList : any=[];
  CreateRate : FormGroup;
  Submitted = false;
  constructor(private formBuilder: FormBuilder, private activeroute: ActivatedRoute, private router: Router, private cookies: CookieService, private RateService: RateService, private RoomService:RoomService) { }

  ngOnInit(): void {
    this.CreateRate = this.formBuilder.group({
      no_of_Days: ['',Validators.required],
      extensionPrice: ['',Validators.required],
      perNightPrice: ['',Validators.required],
      room_id: ['',Validators.required]
    });

    this.RoomService.getRoom().subscribe(data=>{
      console.log(data)
      this.roomDataList = data;
      console.log(data)
    });
  }

  get f() { return this.CreateRate.controls; }

  async onSubmit(rateCreateForm: NgForm) {
    this.Submitted = true;
    if(this.CreateRate.invalid)
    {
      return; 
    }

    let json: any = {};
    json.no_of_Days = rateCreateForm.value.no_of_Days;
    json.extensionPrice = rateCreateForm.value.extensionPrice;
    json.perNightPrice = rateCreateForm.value.perNightPrice;
    
    json.room_id = rateCreateForm.value.room_id;
    json.totalAmount = rateCreateForm.value.no_of_Days * rateCreateForm.value.perNightPrice + rateCreateForm.value.extensionPrice;


    this.RateService.createRate(json).subscribe(data => {
      Swal.fire({
        position: 'top-end',
        title: 'info <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#17a2b8"  stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-alert-circle">  <circle cx="12" cy="12" r="10"></circle>  <line x1="12" y1="8" x2="12" y2="12"></line>   <line x1="12" y1="16" x2="12.01" y2="16"></line></svg>',
        text: 'Rate Registered Successfully',
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
