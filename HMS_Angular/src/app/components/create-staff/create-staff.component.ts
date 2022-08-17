import { HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { generalPath, serverUrl, applicationUrl } from 'src/app/constants/generalConstants';
import { CookieService } from 'ngx-cookie-service';
import { StaffService } from 'src/app/service/staff.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-create-staff',
  templateUrl: './create-staff.component.html',
  styleUrls: ['./create-staff.component.css']
})
export class CreateStaffComponent implements OnInit {
  CreateStaff : FormGroup;
  Submitted = false;

  constructor(private formBuilder: FormBuilder, private activeroute: ActivatedRoute, private router: Router, private cookies: CookieService, private StaffService: StaffService) { }
  value:any;

  ngOnInit(): void {
    this.CreateStaff = this.formBuilder.group({
      staffName: ['',Validators.required],
      nic: ['',Validators.required],
      address: ['',Validators.required],
      salary: ['',Validators.required],
      age: ['',Validators.required],
      occupation: ['',Validators.required],
      email: ['',Validators.required]
    });

    this.value ="stringstring";
  }

  get f() { return this.CreateStaff.controls; }

  async onSubmit(staffCreateForm: NgForm) {
    this.Submitted = true;
    if(this.CreateStaff.invalid)
    {
      return; 
    }

    let json: any = {};
    json.staffName = staffCreateForm.value.staffName;
    json.address = staffCreateForm.value.address;
    json.nic = staffCreateForm.value.nic;
    json.salary = staffCreateForm.value.salary;
    json.age = staffCreateForm.value.age;
    json.occupation = staffCreateForm.value.occupation;
    json.email = staffCreateForm.value.email;

console.log(json)

    this.StaffService.createStaff(json).subscribe(data => {
      Swal.fire({
        position: 'top-end',
        title: 'info <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#17a2b8"  stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-alert-circle">  <circle cx="12" cy="12" r="10"></circle>  <line x1="12" y1="8" x2="12" y2="12"></line>   <line x1="12" y1="16" x2="12.01" y2="16"></line></svg>',
        text: 'Staff Registered Successfully',
        showConfirmButton: false,
        timer: 1500
      }).then(()=>{
        this.router.navigate(['/', 'listStaff']);
      })
      
    })
  }

  cancelform()
  {
    this.router.navigate(['/', 'listStaff']);
  }
}
