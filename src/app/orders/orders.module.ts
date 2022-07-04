import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrdersRoutingModule } from './orders-routing.module';
import { OrdersComponent } from './orders.component';
import { ListOrdersComponent } from './list-orders/list-orders.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AddOrdersComponent } from './add-orders/add-orders.component';
import { ReactiveFormsModule } from '@angular/forms';
import { EditOrdersComponent } from './edit-orders/edit-orders.component';


@NgModule({
  declarations: [
    OrdersComponent,
    ListOrdersComponent,
    AddOrdersComponent,
    EditOrdersComponent
  ],
  imports: [
    CommonModule,
    OrdersRoutingModule,
    FontAwesomeModule,
    ReactiveFormsModule
  ]
})
export class OrdersModule { }
