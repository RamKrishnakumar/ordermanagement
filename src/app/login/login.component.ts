import { state } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  submitted: boolean;
  loginForm: FormGroup;
  isChecked: boolean = false;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthenticationService,
    public router: Router
  ) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: new FormControl("", Validators.compose([
        Validators.required,
      ])),
      password: new FormControl("", Validators.compose([
        Validators.required
      ]))
    });
  }

  onSubmit() {
    this.submitted = true;
    if (this.loginForm.invalid) {
      return;
    }
    let body = {
      email: this.loginForm.value.email,
      password: this.loginForm.value.password
    };
    this.authService.loginUser(body,'login').subscribe((data)=>{
      console.log(data);
      if(data.response.length > 0){
        this.router.navigateByUrl('/orders', { state: data.response[0] });
      }
    })
  }

  checkValue(event:any){
    this.isChecked = !this.isChecked
     console.log(event);
  }

}
