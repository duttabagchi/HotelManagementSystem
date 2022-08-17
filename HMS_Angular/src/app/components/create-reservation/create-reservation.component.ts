import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { ReservationService } from 'src/app/service/reservation.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-create-reservation',
  templateUrl: './create-reservation.component.html',
  styleUrls: ['./create-reservation.component.css']
})
export class CreateReservationComponent implements OnInit {
  CreateReservation : FormGroup;
  Submitted = false;

  constructor(private formBuilder: FormBuilder, private activeroute: ActivatedRoute, private router: Router, private cookies: CookieService, private ReservationService: ReservationService) { }
  value:any;
  ngOnInit(): void {
    this.CreateReservation = this.formBuilder.group({
      no_of_children: ['',Validators.required],
      no_of_adults: ['',Validators.required],
      checkin_date: ['',Validators.required],
      checkout_date: ['',Validators.required],
      no_of_rooms: ['',Validators.required],
      
      phnNumber: ['',Validators.required]
    });

    this.value ="stringstring";
  }
  
  get f() { return this.CreateReservation.controls; }

  async onSubmit(reservationCreateForm: NgForm) {
    this.Submitted = true;
    if(this.CreateReservation.invalid)
    {
      return; 
    }

    let json: any = {};
    json.no_of_children = reservationCreateForm.value.no_of_children;
    json.no_of_adults = reservationCreateForm.value.no_of_adults;
    json.checkin_date = reservationCreateForm.value.checkin_date;
    json.checkout_date = reservationCreateForm.value.checkout_date;
    json.no_of_rooms = reservationCreateForm.value.no_of_rooms;
    
    json.phnNumber = reservationCreateForm.value.phnNumber;
    

console.log(json)

    this.ReservationService.createReservation(json).subscribe(data => {
      Swal.fire({
        position: 'top-end',
        title: 'info <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#17a2b8"  stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-alert-circle">  <circle cx="12" cy="12" r="10"></circle>  <line x1="12" y1="8" x2="12" y2="12"></line>   <line x1="12" y1="16" x2="12.01" y2="16"></line></svg>',
        text: 'Reserved Successfully',
        showConfirmButton: false,
        timer: 1500
      }).then(()=>{
        this.router.navigate(['/', 'listReservation']);
      })
      
    })
  }

  cancelform()
  {
    this.router.navigate(['/', 'listReservation']);
  }
}
