import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  //form ID
  loginForm: FormGroup;
  errorMsg: string;
  title: string = ("login");
  actualDate: any = new Date();


  constructor(private formBuilder: FormBuilder,
    private router: Router,
    private userService: UserService) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: ["", [Validators.required, Validators.email]],
      pwd: ["", [Validators.required, Validators.minLength(6), Validators.maxLength(12)]],
    })
  }

  login() {
    this.userService.login(this.loginForm.value).subscribe(
      (data) => {
        if (data.message == "2") {
          localStorage.setItem("userId", (data.user.id));
          localStorage.setItem("userRole", data.user.role);
          (data.user.role) == "admin"  ?
            this.router.navigate(['admin']) :
            this.router.navigate([`profile/${data.user.id}`]);
        }
        else {
          this.errorMsg = "please check email/pwd";
        }
      }
    );

  }

}
