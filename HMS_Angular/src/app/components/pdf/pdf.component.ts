import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RateService } from 'src/app/service/rate.service';
import { RoomService } from 'src/app/service/room.service';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

@Component({
  selector: 'app-pdf',
  templateUrl: './pdf.component.html',
  styleUrls: ['./pdf.component.css']
})
export class PdfComponent implements OnInit {
  row_id: any;
  rate_id:any;
  no_of_Days:any;
  extensionPrice:any;
  perNightPrice:any;
  totalAmount:any;
  room_id:any;
  room_type:any;
 

  rateDataList:any = [];
  roomSearch:any=[];

  constructor( private activeroute: ActivatedRoute, private router: Router, private rateservice: RateService,private RoomService: RoomService) { }

  ngOnInit(): void {
    this.row_id  = this.activeroute.snapshot.params.row_id;
    this.row_id = atob(this.row_id);
    this.getSingleRateDetails();
  }

  getRoomData()
  {
      this.RoomService.getSingleRoom(this.room_id).subscribe(element => {
       
        this.room_type=element.room_type;
      }); 
  }

  getSingleRateDetails()
  {
    this.rateservice.getSingleRate(this.row_id).subscribe(data=>{
      this.rate_id=data.rate_id;
      this.no_of_Days=data.no_of_Days;
      this.extensionPrice=data.extensionPrice;
      this.perNightPrice=data.perNightPrice;
      this.totalAmount=data.totalAmount;
      this.room_id=data.room_id;
      this.getRoomData();
     
    })
  }

  public openPDF(): void {
    let DATA: any = document.getElementById('htmlData');
    html2canvas(DATA).then((canvas) => {
      let fileWidth = 208;
      let fileHeight = (canvas.height * fileWidth) / canvas.width;
      const FILEURI = canvas.toDataURL('image/png');
      let PDF = new jsPDF('p', 'mm', 'a4');
      let position = 0;
      PDF.addImage(FILEURI, 'PNG', 0, position, fileWidth, fileHeight);
      PDF.save('Issue-Bill.pdf');
    });
  }

}