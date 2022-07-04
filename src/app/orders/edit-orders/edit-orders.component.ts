import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthenticationService } from 'src/app/authentication.service';
import { OrderService } from 'src/app/services/order.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-edit-orders',
  templateUrl: './edit-orders.component.html',
  styleUrls: ['./edit-orders.component.scss']
})
export class EditOrdersComponent implements OnInit {

  orderData: any;
  validations_form: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private auth: AuthenticationService,
    private router: Router,
    public formBuilder: FormBuilder,
    public orderService: OrderService
  ) {
    this.orderData = this.router.getCurrentNavigation()?.extras.state;
    if(this.orderData == undefined){
      this.router.navigateByUrl('/orders');
    }

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

    this.validations_form.patchValue({
      orderNumber: this.orderData.orderNumber,
      orderDueDate: this.orderData.orderDueDate,
      customerName: this.orderData.customerName,
      customerAddress: this.orderData.customerAddress,
      customerPhone: this.orderData.customerPhone,
      orderTotalAmt: this.orderData.orderTotalAmt
    });

  }

  onSubmit(){
    if(this.validations_form.valid){
     console.log(this.validations_form.value);
     this.orderService.updateOrder(this.orderData._id,'updateorder',this.validations_form.value).subscribe((data)=>{
      console.log(data);
      Swal.fire(data.message).then(()=>{
        this.router.navigate(['/orders']);
      })
     })
    }
   }

}
