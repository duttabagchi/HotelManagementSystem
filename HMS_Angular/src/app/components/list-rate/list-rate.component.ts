import { Component, OnInit, OnDestroy } from "@angular/core";
import { Router } from "@angular/router";
import { element } from "protractor";
import { Subject } from "rxjs";
import { RateService } from "src/app/service/rate.service";
import { RoomService } from "src/app/service/room.service";
import Swal from "sweetalert2";


@Component({
  selector: 'app-list-rate',
  templateUrl: './list-rate.component.html',
  styleUrls: ['./list-rate.component.css']
})
export class ListRateComponent implements OnInit {
  public loading = false;
  rateDataList:any = [];
  roomSearch:any=[];
  dtOptions: DataTables.Settings = {
    order: [],
    columnDefs: [{ targets: [1], orderable: false }],
  };
  dtTrigger: Subject<any> = new Subject<any>();
  constructor(public router: Router, private RateService: RateService, private RoomService: RoomService) { }

  ngOnInit(): void {
    
    this.router.navigate(["listRate"]);
    this.getRoomData();
  }

  ngOnDestroy(): void {
    this.dtTrigger.unsubscribe();
  }

  getRoomData()
  {
    this.RoomService.getRoom().subscribe(data=>{
      data.forEach(element => {
        this.roomSearch[element.room_id] = element;
      });
    })
    this.getRateData();
  }
  getRateData()
  {
    this.RateService.getRate().subscribe(data=>{
      let array:any;
     data.forEach(element => {
        array = {};
        array.rate_id = element.rate_id;
        array.no_of_Days = element.no_of_Days;
        array.extensionPrice = element.extensionPrice;
        array.perNightPrice = element.perNightPrice;
        array.totalAmount = element.totalAmount;

        array.room_id = this.roomSearch[element.room_id].room_id;
        array.room_type = this.roomSearch[element.room_id].room_type;
       
        this.rateDataList.push(array);
      })
      this.dtTrigger.next();
    })
  }

  editRate(id)
  {
    id = btoa(id);
    this.router.navigate(["editRate/" + id]);
  }

  deleteRate(id)
  {
   this.RateService.deleteRate(id).subscribe(data=>{
    location.reload();
   })
  }

  pdfG(id)
  {
    id = btoa(id);
    this.router.navigate(["pdf/" + id]);
  }
}