import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddOrdersComponent } from './add-orders/add-orders.component';
import { EditOrdersComponent } from './edit-orders/edit-orders.component';
import { ListOrdersComponent } from './list-orders/list-orders.component';
import { OrdersComponent } from './orders.component';

const routes: Routes = [
  { path: '', component: ListOrdersComponent },
  {path:'addorder', component: AddOrdersComponent },
  {path:'editorder', component: EditOrdersComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrdersRoutingModule { }
