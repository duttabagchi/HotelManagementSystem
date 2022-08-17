import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { GuestService } from 'src/app/service/guest.service';

@Component({
  selector: 'app-list-guest',
  templateUrl: './list-guest.component.html',
  styleUrls: ['./list-guest.component.css']
})
export class ListGuestComponent implements OnInit {
  public loading = false;
  GuestDataList:any = [];
  dtOptions: DataTables.Settings = {
    order: [],
    columnDefs: [{ targets: [1], orderable: false }],
  };
  dtTrigger: Subject<any> = new Subject<any>();
  constructor(public router: Router,
    private GuestService: GuestService) { }

  ngOnInit(): void {
    this.GuestService.getGuest().subscribe(data=>{
    this.GuestDataList = data;
    this.dtTrigger.next();
    })
  }

  ngOnDestroy(): void {
    this.dtTrigger.unsubscribe();
  }

  editGuest(id)
  {
    id = btoa(id);
    this.router.navigate(["editGuest/" + id]);
  }

  deleteGuest(id)
  {
   this.GuestService.deleteGuest(id).subscribe(data=>{
    location.reload();
   })
  }
}
