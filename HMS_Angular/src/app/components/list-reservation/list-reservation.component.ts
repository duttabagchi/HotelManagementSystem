import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from "rxjs";
import { ReservationService } from 'src/app/service/reservation.service';

@Component({
  selector: 'app-list-reservation',
  templateUrl: './list-reservation.component.html',
  styleUrls: ['./list-reservation.component.css']
})
export class ListReservationComponent implements OnInit {
  public loading = false;
  ReservationDataList:any = [];
  dtOptions: DataTables.Settings = {
    order: [],
    columnDefs: [{ targets: [1], orderable: false }],
  };
  dtTrigger: Subject<any> = new Subject<any>();
  constructor(public router: Router,
    private ReservationService: ReservationService) { }

  ngOnInit(): void {
    this.ReservationService.getReservation().subscribe(data=>{
      this.ReservationDataList = data;
      this.dtTrigger.next();
    })
  }
  ngOnDestroy(): void {
    this.dtTrigger.unsubscribe();
  }

  editReservation(id)
  {
    id = btoa(id);
    this.router.navigate(["editReservation/" + id]);
  }

  deleteReservation(id)
  {
   this.ReservationService.deleteReservation(id).subscribe(data=>{
    location.reload();
   })
  }
}
