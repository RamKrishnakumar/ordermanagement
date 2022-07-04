import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent implements OnInit {

  user: any;

  constructor(
    public router: Router
  ) {
    this.user = this.router.getCurrentNavigation()?.extras.state;
  }

  ngOnInit(): void {
    console.log(this.user);
  }

}
