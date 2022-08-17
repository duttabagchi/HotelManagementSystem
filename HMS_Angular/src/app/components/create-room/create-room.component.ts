import { HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { generalPath, serverUrl, applicationUrl } from 'src/app/constants/generalConstants';
import { CookieService } from 'ngx-cookie-service';
import { RoomService } from 'src/app/service/room.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-create-room',
  templateUrl: './create-room.component.html',
  styleUrls: ['./create-room.component.css']
})
export class CreateRoomComponent implements OnInit {
  CreateRoom : FormGroup;
  Submitted = false;
  
  constructor(private formBuilder: FormBuilder, private activeroute: ActivatedRoute, private router: Router, private cookies: CookieService, private RoomService: RoomService) { }

  ngOnInit(): void {
    this.CreateRoom = this.formBuilder.group({
      room_type: ['',Validators.required],
      status: ['',Validators.required],
      check_in: ['',Validators.required],
      check_out: ['',Validators.required]
    });
  }

  get f() { return this.CreateRoom.controls; }

  async onSubmit(createRoomForm: NgForm) {
    this.Submitted = true;
    if(this.CreateRoom.invalid)
    {
      return; 
    }

    let json: any = {};
    json.room_type = createRoomForm.value.room_type;
    json.check_in = createRoomForm.value.check_in;
    json.check_out = createRoomForm.value.check_out;
    json.status = createRoomForm.value.status;
    

    

    this.RoomService.createRoom(json).subscribe(data => {
      Swal.fire({
        position: 'top-end',
        title: 'info <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#17a2b8"  stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-alert-circle">  <circle cx="12" cy="12" r="10"></circle>  <line x1="12" y1="8" x2="12" y2="12"></line>   <line x1="12" y1="16" x2="12.01" y2="16"></line></svg>',
        text: 'Room Added Successfully',
        showConfirmButton: false,
        timer: 1500
      }).then(()=>{
        this.router.navigate(['/', 'listRoom']);
      })
      
    })
  }

  cancelForm()
  {
    this.router.navigate(['/', 'listRoom']);
  }
}
