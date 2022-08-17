import { HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { generalPath, serverUrl, applicationUrl } from 'src/app/constants/generalConstants';
import { CookieService } from 'ngx-cookie-service';
import { StaffService } from 'src/app/service/staff.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-edit-staff',
  templateUrl: './edit-staff.component.html',
  styleUrls: ['./edit-staff.component.css']
})
export class EditStaffComponent implements OnInit {
  constructor(private formBuilder: FormBuilder, private activeroute: ActivatedRoute, private router: Router, private cookies: CookieService, private StaffService: StaffService) { }
  value:any;
  row_id:any;
  staffName:any;
  address :any;
  nic :any;
  salary:any;
  age:any;
  occupation:any;
  email:any;
    ngOnInit(): void {
      this.value ="stringstring";
      this.row_id  = this.activeroute.snapshot.params.row_id;
      this.row_id = atob(this.row_id);
    this.getSingleStaffDetails();
    }
  
    getSingleStaffDetails()
    {
      this.StaffService.getSingleStaff(this.row_id).subscribe(data=>{
        console.log(data)
        this.staffName = data.staffName;
        this.address = data.address;
        this.nic = data.nic;
        this.salary = data.salary;
        this.age = data.age;
        this.email = data.email;
        this.occupation = data.occupation;
      })
    }
    async onSubmit(staffCreateForm: NgForm) {
      let json: any = {};
      json.staffId = this.row_id;
      json.staffName = staffCreateForm.value.staffName;
      json.address = staffCreateForm.value.address;
      json.nic = staffCreateForm.value.nic;
      json.salary = staffCreateForm.value.salary;
      json.age = staffCreateForm.value.age;
      json.occupation = staffCreateForm.value.occupation;
      json.email = staffCreateForm.value.email;
  
  console.log(json)
  
      this.StaffService.updateStaff(json).subscribe(data => {
        Swal.fire({
          position: 'top-end',
          title: 'info <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#17a2b8"  stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-alert-circle">  <circle cx="12" cy="12" r="10"></circle>  <line x1="12" y1="8" x2="12" y2="12"></line>   <line x1="12" y1="16" x2="12.01" y2="16"></line></svg>',
          text: 'Staff Updated Successfully',
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
