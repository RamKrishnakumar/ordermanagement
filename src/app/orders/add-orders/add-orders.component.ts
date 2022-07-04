import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthenticationService } from 'src/app/authentication.service';
import { OrderService } from 'src/app/services/order.service';
import Swal  from 'sweetalert2';

@Component({
  selector: 'app-add-orders',
  templateUrl: './add-orders.component.html',
  styleUrls: ['./add-orders.component.scss']
})
export class AddOrdersComponent implements OnInit {


  validations_form : FormGroup;

  constructor(
    private route: ActivatedRoute,
    private auth: AuthenticationService,
    private router: Router,
    public formBuilder: FormBuilder,
    public orderService: OrderService
  ) {
    this.validations_form = this.formBuilder.group({
      orderNumber: new FormControl('',Validators.required),
      orderDueDate: new FormControl('',Validators.required),
      customerName: new FormControl('',Validators.required),
      customerAddress: new FormControl('',Validators.required),
      customerPhone: new FormControl('',Validators.required),
      orderTotalAmt: new FormControl('',Validators.required),
    });

  }

  ngOnInit(): void {

  }

  onSubmit(){
   if(this.validations_form.valid){
    console.log(this.validations_form.value);
    this.orderService.addNewOrder(this.validations_form.value,'add').subscribe((data)=>{
      console.log(data);
      Swal.fire(data.message).then(()=>{
        this.router.navigate(['/orders']);
      });
    })
   }
  }

}
