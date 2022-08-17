import { Component, OnInit, OnDestroy } from "@angular/core";
import { Router } from "@angular/router";
import { element } from "protractor";
import { Subject } from "rxjs";
import { RoomService } from "src/app/service/room.service";
import Swal from "sweetalert2";


@Component({
  selector: 'app-list-room',
  templateUrl: './list-room.component.html',
  styleUrls: ['./list-room.component.css']
})
export class ListRoomComponent implements OnInit {
  public loading = false;
  roomDataList:any = [];
  dtOptions: DataTables.Settings = {
    order: [],
    columnDefs: [{ targets: [1], orderable: false }],
  };
  dtTrigger: Subject<any> = new Subject<any>();
  constructor(public router: Router,
    private RoomService: RoomService) { }

  ngOnInit(): void {
    this.RoomService.getRoom().subscribe(data=>{
    this.roomDataList = data;
    this.dtTrigger.next();
    })
  }

  ngOnDestroy(): void {
    this.dtTrigger.unsubscribe();
  }

  editRoom(id)
  {
    id = btoa(id);
    this.router.navigate(["editRoom/" + id]);
  }

  deleteRoom(id)
  {
   this.RoomService.deleteRoom(id).subscribe(data=>{
    location.reload();
   })
  }
}
