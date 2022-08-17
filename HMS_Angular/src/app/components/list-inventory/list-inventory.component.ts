import { Component, OnInit, OnDestroy } from "@angular/core";
import { Router } from "@angular/router";
import { Subject } from "rxjs";
import { InventoryService } from "src/app/service/inventory.service";
import Swal from "sweetalert2";


@Component({
  selector: 'app-list-inventory',
  templateUrl: './list-inventory.component.html',
  styleUrls: ['./list-inventory.component.css']
})
export class ListInventoryComponent implements OnInit {
  public loading = false;
  inventoryDataList:any = [];
  dtOptions: DataTables.Settings = {
    order: [],
    columnDefs: [{ targets: [1], orderable: false }],
  };
  dtTrigger: Subject<any> = new Subject<any>();
  constructor(public router: Router,
    private InventoryService: InventoryService) { }

  ngOnInit(): void {
    this.InventoryService.getInventory().subscribe(data=>{
      this.inventoryDataList = data;
      this.dtTrigger.next();
    })
  }

  ngOnDestroy(): void {
    this.dtTrigger.unsubscribe();
  }

  editInventory(id)
  {
    id = btoa(id);
    this.router.navigate(["editInventory/" + id]);
  }

  deleteInventory(id)
  {
   this.InventoryService.deleteInventory(id).subscribe(data=>{
    location.reload();
   })
  }

}
