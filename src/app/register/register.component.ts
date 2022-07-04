import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthenticationService } from '../authentication.service';
import { PasswordValidators } from '../validators/password.validator';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  submitted: boolean;
  registerForm: FormGroup;
  matching_passwords_group: FormGroup;

  constructor(
    public formBuilder: FormBuilder,
    public authService: AuthenticationService
  ) { }

  ngOnInit(): void {

    // this.matching_passwords_group = new FormGroup({
    //   password: new FormControl('',Validators.compose([
    //     Validators.minLength(8),
    //     Validators.required
    //   ])),
    //   confirmpassword: new FormControl('',Validators.required)
    // },
    // );

    this.registerForm = this.formBuilder.group(
      {
          email: new FormControl('', Validators.compose([
            Validators.required,
            Validators.email
          ])),
          //matching_passwords: this.matching_passwords_group,
          password: new FormControl('',Validators.compose([
            Validators.minLength(8),
            Validators.required
          ])),
          confirmpassword: new FormControl('',Validators.required)
       },
      {
        validator : PasswordValidators('password','confirmpassword')
      }
      );
  }

  onSubmit() {
    this.submitted = true;
    if (this.registerForm.invalid) {
      return;
    }
    let body = {
      email: this.registerForm.value.email,
      password: this.matching_passwords_group.value.password
    };

    console.log(body)
    this.authService.login(body).subscribe((data: any) => {
      //your will get data success or false
      if (data.success) {
        //do some action
      } else {
        //do some action
        //show error message
      }
    })
  }

}
