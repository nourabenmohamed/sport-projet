import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users-tab',
  templateUrl: './users-tab.component.html',
  styleUrls: ['./users-tab.component.css']
})
export class UsersTabComponent implements OnInit {
  users:any={}
  constructor() { }

  ngOnInit() {
    this.users=JSON.parse(localStorage.getItem('users') ||'[]');
  }

}
