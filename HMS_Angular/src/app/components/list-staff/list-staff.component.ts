import { Component, OnInit, OnDestroy } from "@angular/core";
import { Router } from "@angular/router";
import { Subject } from "rxjs";
import { StaffService } from "src/app/service/staff.service";
import Swal from "sweetalert2";



@Component({
  selector: 'app-list-staff',
  templateUrl: './list-staff.component.html',
  styleUrls: ['./list-staff.component.css']
})
export class ListStaffComponent implements OnInit {
  public loading = false;
  StaffDataList:any = [];
  dtOptions: DataTables.Settings = {
    order: [],
    columnDefs: [{ targets: [1], orderable: false }],
  };
  dtTrigger: Subject<any> = new Subject<any>();
  constructor(public router: Router,
    private StaffService: StaffService) { }

  ngOnInit(): void {
    this.StaffService.getStaff().subscribe(data=>{
      this.StaffDataList = data;
      this.dtTrigger.next();
    })
  }

  ngOnDestroy(): void {
    this.dtTrigger.unsubscribe();
  }

  editStaff(id)
  {
    id = btoa(id);
    this.router.navigate(["editStaff/" + id]);
  }

  deleteStaff(id)
  {
   this.StaffService.deleteStaff(id).subscribe(data=>{
    location.reload();
   })
  }

}
