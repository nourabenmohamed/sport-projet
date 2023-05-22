import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, } from '@angular/forms'
import { Router } from '@angular/router';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  x: boolean = false;
  //form ID
  signupForm: FormGroup;
  errorMsg: string;
  imagePreview: any;


  constructor(private formBuilder: FormBuilder, private userService: UserService,
    private router: Router) { }

  ngOnInit() {
    this.signupForm = this.formBuilder.group({
      firstName: ["", [Validators.required, Validators.minLength(3)]],
      lastName: ["", [Validators.required, Validators.minLength(5)]],
      email: ["", [Validators.required, Validators.email]],
      pwd: ["", [Validators.required, Validators.minLength(6), Validators.maxLength(12)]],
      confirmPwd: [""],
      tel: ["", [Validators.required, Validators.minLength(8)]],
      adress: ["", [Validators.required,]],
      img: [""],

    });
  }
  signup() {
    this.signupForm.value.role = "user";
    this.userService.signup(this.signupForm.value, this.signupForm.value.img).subscribe(
      (data) => {
        console.log("here message after signup", data.message);

        if (data.message) {
          this.router.navigate(["login"]);
        } else {
          this.errorMsg = "Email Exists";
        }

      }
    );
  }

  onImageSelected(event: Event) {
    const file = (event.target as HTMLInputElement).files[0];
    this.signupForm.patchValue({ img: file });
    this.signupForm.updateValueAndValidity();
    const reader = new FileReader();
    reader.onload = () => {
      this.imagePreview = reader.result as string
    };
    reader.readAsDataURL(file);
  }
  // app.js


}


