import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { PagenotfoundComponent } from './components/pagenotfound/pagenotfound.component';
import { EditRoomComponent } from './components/edit-room/edit-room.component';
import { ListRoomComponent } from './components/list-room/list-room.component';
import { CreateRoomComponent } from './components/create-room/create-room.component';
import { CreateStaffComponent } from './components/create-staff/create-staff.component';
import { EditStaffComponent } from './components/edit-staff/edit-staff.component';
import { ListStaffComponent } from './components/list-staff/list-staff.component';
import { ListInventoryComponent } from './components/list-inventory/list-inventory.component';
import { CreateInventoryComponent } from './components/create-inventory/create-inventory.component';
import { EditInventoryComponent } from './components/edit-inventory/edit-inventory.component';
import { CreateRateComponent } from './components/create-rate/create-rate.component';
import { EditRateComponent } from './components/edit-rate/edit-rate.component';
import { ListRateComponent } from './components/list-rate/list-rate.component';
import { AuthGuard } from './guard/auth.guard';
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

const routes: Routes = [
  /* Initial Component to load */
    { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  /* Initial Component to load */

  /* Dashboard Components */
    { path: 'dashboard', component: DashboardComponent},
  /* Dashboard Components */

  /* Room Components */
    { path: 'createRoom', component: CreateRoomComponent},
    { path: 'editRoom/:row_id', component: EditRoomComponent},
    { path: 'listRoom', component: ListRoomComponent},
  /* Room Components */

  /* Staff Components */
    { path: 'createStaff', component: CreateStaffComponent},
    { path: 'editStaff/:row_id', component: EditStaffComponent},
    { path: 'listStaff', component: ListStaffComponent},
  /* Staff Components */

  /* Iventory Components */
    { path: 'createIventory', component: CreateInventoryComponent},
    { path: 'editInventory/:row_id', component: EditInventoryComponent},
    { path: 'listIventory', component: ListInventoryComponent},
  /* Iventory Components */

  /* Rate Components */
  { path: 'createRate', component: CreateRateComponent},
  { path: 'editRate/:row_id', component: EditRateComponent},
  { path: 'listRate', component: ListRateComponent},
  /* Rate Components */

  /* Guest Components */
  { path: 'createGuest', component: CreateGuestComponent},
  { path: 'editGuest/:row_id', component: EditGuestComponent},
  { path: 'listGuest', component: ListGuestComponent},
  /* Guest Components */

  /* Reservation Components */
  { path: 'createReservation', component: CreateReservationComponent},
  { path: 'listGuest/createReservation', component: CreateReservationComponent},
  { path: 'editReservation/:row_id', component: EditReservationComponent},
  { path: 'listReservation', component: ListReservationComponent},
  /* Reservation Components */

  /* Payment Components */
  { path: 'createPayment', component: CreatePaymentComponent},
  { path: 'editPayment/:row_id', component: EditPaymentComponent},
  { path: 'listPayment', component: ListPaymentComponent},
  /* Payment Components */

  /* PDF Components */
  { path: 'pdf/:row_id', component: PdfComponent}, 
  /* PDF Components */

  /* PagenotFound Components */
    { path: '**', component: PagenotfoundComponent},
  /* PagenotFound Components */


 

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
