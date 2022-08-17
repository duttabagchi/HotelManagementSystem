import { HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { generalPath, serverUrl, applicationUrl } from 'src/app/constants/generalConstants';
import { CookieService } from 'ngx-cookie-service';
import { InventoryService } from 'src/app/service/inventory.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-edit-inventory',
  templateUrl: './edit-inventory.component.html',
  styleUrls: ['./edit-inventory.component.css']
})
export class EditInventoryComponent implements OnInit {
  row_id:any;
  inventoryName:any;
  quantity:any;
  price:any;
  constructor(private formBuilder: FormBuilder, private activeroute: ActivatedRoute, private router: Router, private cookies: CookieService, private InventoryService: InventoryService) { }
  ngOnInit(): void {
    this.row_id  = this.activeroute.snapshot.params.row_id;
    this.row_id = atob(this.row_id);
  this.getSingleInventoryDetails();
  }

  getSingleInventoryDetails()
  {
    this.InventoryService.getSingleInventory(this.row_id).subscribe(data=>{
      console.log(data)
      this.inventoryName = data.inventoryName;
      this.quantity = data.quantity;
      this.price = data.price;
    })
  }
  async onSubmit(inventoryEditForm: NgForm) {
    let json: any = {};
    json.id = this.row_id;
    json.inventoryName = inventoryEditForm.value.inventoryName;
    json.quantity = inventoryEditForm.value.quantity;
    json.price = inventoryEditForm.value.price;



    this.InventoryService.updateInventory(json).subscribe(data => {
      Swal.fire({
        position: 'top-end',
        title: 'info <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#17a2b8"  stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-alert-circle">  <circle cx="12" cy="12" r="10"></circle>  <line x1="12" y1="8" x2="12" y2="12"></line>   <line x1="12" y1="16" x2="12.01" y2="16"></line></svg>',
        text: 'Inventory Updated Successfully',
        showConfirmButton: false,
        timer: 1500
      }).then(()=>{
        this.router.navigate(['/', 'listIventory']);
      })
      
    })
  }

  cancelform()
  {
    this.router.navigate(['/', 'listIventory']);
  }
}
