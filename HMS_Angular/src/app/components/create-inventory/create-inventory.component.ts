import { HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { generalPath, serverUrl, applicationUrl } from 'src/app/constants/generalConstants';
import { CookieService } from 'ngx-cookie-service';
import { InventoryService } from 'src/app/service/inventory.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-create-inventory',
  templateUrl: './create-inventory.component.html',
  styleUrls: ['./create-inventory.component.css']
})
export class CreateInventoryComponent implements OnInit {
  CreateInventory : FormGroup;
  Submitted = false;
  constructor(private formBuilder: FormBuilder, private activeroute: ActivatedRoute, private router: Router, private cookies: CookieService, private InventoryService: InventoryService) { }

  ngOnInit(): void {
    this.CreateInventory = this.formBuilder.group({
      inventoryName: ['',Validators.required],
      quantity: ['',Validators.required],
      price: ['',Validators.required]
  });
  }

  get f() { return this.CreateInventory.controls; }

  async onSubmit(inventoryCreateForm: NgForm) {
    this.Submitted = true;
    if(this.CreateInventory.invalid)
    {
      return; 
    }

    let json: any = {};
    json.inventoryName = inventoryCreateForm.value.inventoryName;
    json.quantity = inventoryCreateForm.value.quantity;
    json.price = inventoryCreateForm.value.price;


    this.InventoryService.createInventory(json).subscribe(data => {
      Swal.fire({
        position: 'top-end',
        title: 'info <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#17a2b8"  stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-alert-circle">  <circle cx="12" cy="12" r="10"></circle>  <line x1="12" y1="8" x2="12" y2="12"></line>   <line x1="12" y1="16" x2="12.01" y2="16"></line></svg>',
        text: 'Inventory Registered Successfully',
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
