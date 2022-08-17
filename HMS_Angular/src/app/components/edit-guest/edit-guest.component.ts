import { Component, OnInit } from '@angular/core';
import { FormBuilder, NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { GuestService } from 'src/app/service/guest.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-edit-guest',
  templateUrl: './edit-guest.component.html',
  styleUrls: ['./edit-guest.component.css']
})
export class EditGuestComponent implements OnInit {
  row_id:any;
  name:any;
  address:any;
  phnNumber:any;
  gender:any;
  constructor(private formBuilder: FormBuilder, private activeroute: ActivatedRoute, private router: Router, private cookies: CookieService, private GuestService: GuestService) { }

  ngOnInit(): void {
    this.row_id  = this.activeroute.snapshot.params.row_id;
    this.row_id = atob(this.row_id);
    this.getSingleGuestDetails();
  }

  getSingleGuestDetails()
  {
    this.GuestService.getSingleGuest(this.row_id).subscribe(data=>{
      console.log(data)
      this.name = data.name;
      this.address = data.address;
      this.phnNumber = data.phnNumber;
      this.gender = data.gender;
    })
  }
  async onSubmit(guestEditForm: NgForm) {
    let json: any = {};
    json.guestId = this.row_id;
    json.name = guestEditForm.value.name;
    json.address = guestEditForm.value.address;
    json.phnNumber = guestEditForm.value.phnNumber;
    json.gender = guestEditForm.value.gender;



    this.GuestService.updateGuest(json).subscribe(data => {
      Swal.fire({
        position: 'top-end',
        title: 'info <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#17a2b8"  stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-alert-circle">  <circle cx="12" cy="12" r="10"></circle>  <line x1="12" y1="8" x2="12" y2="12"></line>   <line x1="12" y1="16" x2="12.01" y2="16"></line></svg>',
        text: 'Guest Updated Successfully',
        showConfirmButton: false,
        timer: 1500
      }).then(()=>{
        this.router.navigate(['/', 'listGuest']);
      })
      
    })
  }

  cancelform()
  {
    this.router.navigate(['/', 'listGuest']);
  }

}
