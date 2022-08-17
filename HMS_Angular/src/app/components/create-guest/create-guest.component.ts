import { Component, OnInit } from '@angular/core';
import { FormBuilder, NgForm, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import Swal from 'sweetalert2';
import { GuestService } from 'src/app/service/guest.service';
import { FormGroup, FormControl} from '@angular/forms';

@Component({
  selector: 'app-create-guest',
  templateUrl: './create-guest.component.html',
  styleUrls: ['./create-guest.component.css']
})
export class CreateGuestComponent implements OnInit {
  CreateGuest : FormGroup;
  Submitted = false;
  constructor(private formBuilder: FormBuilder, private activeroute: ActivatedRoute, private router: Router, private cookies: CookieService, private GuestService: GuestService) { }

  ngOnInit(): void {
    this.CreateGuest = this.formBuilder.group({
      name: ['',Validators.required],
      address: ['',Validators.required],
      phnNumber: ['',Validators.required],
      gender: ['',Validators.required]
  });
  }

  get f() { return this.CreateGuest.controls; }

  async onSubmit(staffCreateForm: NgForm) {
    this.Submitted = true;
    if(this.CreateGuest.invalid)
    {
      return; 
    }

    let json: any = {};
    json.name = staffCreateForm.value.name;
    json.address = staffCreateForm.value.address;
    json.phnNumber = staffCreateForm.value.phnNumber;
    json.gender = staffCreateForm.value.gender;
    

    

    this.GuestService.createGuest(json).subscribe(data => {
      Swal.fire({
        position: 'top-end',
        title: 'info <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#17a2b8"  stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-alert-circle">  <circle cx="12" cy="12" r="10"></circle>  <line x1="12" y1="8" x2="12" y2="12"></line>   <line x1="12" y1="16" x2="12.01" y2="16"></line></svg>',
        text: 'Guest Registered Successfully',
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



