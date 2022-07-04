import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OrderService } from 'src/app/services/order.service';
import Swal  from 'sweetalert2';

@Component({
  selector: 'app-list-orders',
  templateUrl: './list-orders.component.html',
  styleUrls: ['./list-orders.component.scss']
})
export class ListOrdersComponent implements OnInit {

  user: any;

  orderIdToDelete: any;

  ordersList : any = [];

  constructor(
    private orderService : OrderService,
    public router: Router
  ) {
    this.user = this.router.getCurrentNavigation()?.extras.state;
    if(this.user == undefined){
      this.router.navigate(['/login']);
    }

    let orderTempList = [];
    this.orderService.getOrderlist('list').subscribe((data:any)=>{
      this.ordersList = data.data;
    });
   }


  ngOnInit(): void {
    // console.log(this.ordersList);
  }

  confirmDelete(order:any){
     console.log(order);
     Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        this.orderService.deleteOrder(order,'deleteorder').subscribe((data)=>{
          console.log(data);
           Swal.fire(
              data.message
            )
        });
      }
    });
  }

}
