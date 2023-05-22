import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  user:any={};
  id:any;

  constructor(private userService:UserService,
    private activatedRouter:ActivatedRoute) { }

  ngOnInit() {
    this.id=this.activatedRouter.snapshot.paramMap.get("id");
    this.userService.getUserById(this.id).subscribe(
      (data)=>{
        this.user=data.user;
      }

    )
    
  }


}
