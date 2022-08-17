import { Component, OnInit } from '@angular/core';
import { FormBuilder, NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { RoomService } from 'src/app/service/room.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-edit-room',
  templateUrl: './edit-room.component.html',
  styleUrls: ['./edit-room.component.css']
})
export class EditRoomComponent implements OnInit {
  row_id:any;
  room_type:any;
  check_in:any;
  check_out:any;
  status:any;
  constructor(private formBuilder: FormBuilder, private activeroute: ActivatedRoute, private router: Router, private cookies: CookieService, private RoomService: RoomService) { }

  ngOnInit(): void {
    this.row_id  = this.activeroute.snapshot.params.row_id;
    this.row_id = atob(this.row_id);
  this.getSingleRoomDetails();
  }
  
  getSingleRoomDetails()
  {
    this.RoomService.getSingleRoom(this.row_id).subscribe(data=>{
      console.log(data)
      this.room_type = data.room_type;
      this.check_in = data.check_in;
      this.check_out = data.check_out;
      this.status = data.status;
    })
  }
  async onSubmit(roomEditForm: NgForm) {
    let json: any = {};
    json.room_id = this.row_id;
    json.room_type = roomEditForm.value.room_type;
    json.check_in = roomEditForm.value.check_in;
    json.check_out = roomEditForm.value.check_out;
    json.status = roomEditForm.value.status;



    this.RoomService.updateRoom(json).subscribe(data => {
      Swal.fire({
        position: 'top-end',
        title: 'info <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#17a2b8"  stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-alert-circle">  <circle cx="12" cy="12" r="10"></circle>  <line x1="12" y1="8" x2="12" y2="12"></line>   <line x1="12" y1="16" x2="12.01" y2="16"></line></svg>',
        text: 'Room Updated Successfully',
        showConfirmButton: false,
        timer: 1500
      }).then(()=>{
        this.router.navigate(['/', 'listRoom']);
      })
      
    })
  }

  cancelform()
  {
    this.router.navigate(['/', 'listRoom']);
  }
}
