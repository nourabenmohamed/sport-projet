import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup,Validators } from '@angular/forms';
import { MatchService } from 'src/app/service/match.service';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-signup-admin',
  templateUrl: './signup-admin.component.html',
  styleUrls: ['./signup-admin.component.css']
})
export class SignupAdminComponent implements OnInit {
  //form ID
  signupForm: FormGroup;
  errorMsg:string;
  imagePreview:any;

  constructor(private formBuilder:FormBuilder,
    private userService:UserService) { }

  ngOnInit() {this.signupForm = this.formBuilder.group({
    firstName: ["", [Validators.required, Validators.minLength(3)]],
    lastName: ["", [Validators.required, Validators.minLength(5)]],
    email: ["", [Validators.required, Validators.email]],
    password: ["", [Validators.required, Validators.minLength(6), Validators.maxLength(12)]],
    role:["admin"],
    img: [""],
  });
  }

  signup(){
    this.signupForm.value.role="admin";
    this.userService.signup(this.signupForm.value,this.signupForm.value.img).subscribe(
      (data)=>{
        this.errorMsg=data.message;
        
      }
    );
  }

  

}