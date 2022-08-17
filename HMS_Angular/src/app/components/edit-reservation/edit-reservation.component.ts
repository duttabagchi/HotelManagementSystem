import { Component, OnInit } from '@angular/core';
import { FormBuilder, NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { ReservationService } from 'src/app/service/reservation.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-edit-reservation',
  templateUrl: './edit-reservation.component.html',
  styleUrls: ['./edit-reservation.component.css']
})
export class EditReservationComponent implements OnInit {
  row_id:any;
  no_of_children:any;
  no_of_adults:any;
  checkin_date:any;
  checkout_date:any;
  no_of_rooms:any;
  
  phnNumber:any;
  constructor(private formBuilder: FormBuilder, private activeroute: ActivatedRoute, private router: Router, private cookies: CookieService, private ReservationService: ReservationService) { }

  ngOnInit(): void {
    this.row_id  = this.activeroute.snapshot.params.row_id;
    this.row_id = atob(this.row_id);
  this.getSingleReservationDetails();
  }

  getSingleReservationDetails()
  {
    this.ReservationService.getSingleReservation(this.row_id).subscribe(data=>{
      console.log(data)
      this.no_of_children = data.no_of_children;
      this.no_of_adults = data.no_of_adults;
      this.checkin_date = data.checkin_date;
      this.checkout_date = data.checkout_date;
      this.no_of_rooms = data.no_of_rooms;
      
      this.phnNumber = data.phnNumber;
      
    })
  }
  async onSubmit(reservationEditForm: NgForm) {
    let json: any = {};
    json.id = this.row_id;
    json.no_of_children = reservationEditForm.value.no_of_children;
    json.no_of_adults = reservationEditForm.value.no_of_adults;
    json.checkin_date = reservationEditForm.value.checkin_date;
    json.checkout_date = reservationEditForm.value.checkout_date;
    json.no_of_rooms = reservationEditForm.value.no_of_rooms;
    
    json.phnNumber = reservationEditForm.value.phnNumber;


    this.ReservationService.updateReservation(json).subscribe(data => {
      Swal.fire({
        position: 'top-end',
        title: 'info <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#17a2b8"  stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-alert-circle">  <circle cx="12" cy="12" r="10"></circle>  <line x1="12" y1="8" x2="12" y2="12"></line>   <line x1="12" y1="16" x2="12.01" y2="16"></line></svg>',
        text: 'Reservation Updated Successfully',
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
