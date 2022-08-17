/* Import Module Here Starts */
import { BrowserModule } from '@angular/platform-browser';
import { APP_INITIALIZER, NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule  }   from '@angular/forms';
import { DataTablesModule } from "angular-datatables";
import { CommonModule } from '@angular/common';
import { NgxLoadingModule } from 'ngx-loading';
import { NgxChartsModule } from '@swimlane/ngx-charts';


/* Import Module Here Ends */

// import color picker
import { ColorPickerModule } from 'ngx-color-picker';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { DragulaModule } from 'ng2-dragula';

/* Import Services Here Starts */
import { ApplicationService } from './service/application.service';
import { CommonService } from './service/common.service';

/* Import Services Here Ends */

/* Import Components Here Starts */
import {HttpClientModule, HttpInterceptor, HTTP_INTERCEPTORS} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { NavComponent } from './components/nav/nav.component';
import { FooterComponent } from './components/footer/footer.component';

// pipe and filter plugin
import { OrderModule } from 'ngx-order-pipe';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpErrorHandlingInterceptor } from './interceptors/http-error-handling.interceptor';
import { ListRoomComponent } from './components/list-room/list-room.component';
import { EditRoomComponent } from './components/edit-room/edit-room.component';
import { PagenotfoundComponent } from './components/pagenotfound/pagenotfound.component';
import { CreateRoomComponent } from './components/create-room/create-room.component';
import { CreateStaffComponent } from './components/create-staff/create-staff.component';
import { EditStaffComponent } from './components/edit-staff/edit-staff.component';
import { ListStaffComponent } from './components/list-staff/list-staff.component';
import { ListInventoryComponent } from './components/list-inventory/list-inventory.component';
import { CreateInventoryComponent } from './components/create-inventory/create-inventory.component';
import { EditInventoryComponent } from './components/edit-inventory/edit-inventory.component';
import { CreateRateComponent } from './components/create-rate/create-rate.component';
import { ListRateComponent } from './components/list-rate/list-rate.component';
import { EditRateComponent } from './components/edit-rate/edit-rate.component';
import { CreateGuestComponent } from './components/create-guest/create-guest.component';
import { EditGuestComponent } from './components/edit-guest/edit-guest.component';
import { ListGuestComponent } from './components/list-guest/list-guest.component';
import { CreateReservationComponent } from './components/create-reservation/create-reservation.component';
import { EditReservationComponent } from './components/edit-reservation/edit-reservation.component';
import { ListReservationComponent } from './components/list-reservation/list-reservation.component';
import { CreatePaymentComponent } from './components/create-payment/create-payment.component';
import { EditPaymentComponent } from './components/edit-payment/edit-payment.component';
import { ListPaymentComponent } from './components/list-payment/list-payment.component';
import { PdfComponent } from './components/pdf/pdf.component';
/* Import Components Here Ends */

export function app_Init(appService: ApplicationService) {
  return () => appService.initializeApp();
}
@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    NavComponent,
    FooterComponent,
    ListRoomComponent,
    EditRoomComponent,
    PagenotfoundComponent,
    CreateRoomComponent,
    CreateStaffComponent,
    EditStaffComponent,
    ListStaffComponent,
    ListInventoryComponent,
    CreateInventoryComponent,
    EditInventoryComponent,
    CreateRateComponent,
    EditRateComponent,
    ListRateComponent,
    CreateGuestComponent,
    EditGuestComponent,
    ListGuestComponent,
    CreateReservationComponent,
    EditReservationComponent,
    ListReservationComponent,
    CreatePaymentComponent,
    EditPaymentComponent,
    ListPaymentComponent,
    PdfComponent,
   
   
  ],
  imports: [
    BrowserModule,DataTablesModule ,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,ReactiveFormsModule,
    ColorPickerModule,
    DragulaModule.forRoot(),
    OrderModule,
    NgxLoadingModule,
    NgMultiSelectDropDownModule.forRoot(),
    NgbModule,
    BrowserAnimationsModule,
    NgxChartsModule
  ],
  providers: [{
    provide : HTTP_INTERCEPTORS,
    useClass:HttpErrorHandlingInterceptor,
    multi:true
  },{
    provide: APP_INITIALIZER,
    useFactory: app_Init,
    deps: [ApplicationService],
    multi: true
  }, CommonService],
  bootstrap: [AppComponent]
})
export class AppModule { }
