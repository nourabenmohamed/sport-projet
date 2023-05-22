import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';



@Component({
  selector: 'app-add-stadium',
  templateUrl: './add-stadium.component.html',
  styleUrls: ['./add-stadium.component.css']
})
export class AddStadiumComponent implements OnInit {

  constructor(private router :Router) { }
  stadiumForm: FormGroup;
  stadium:any  = {};

  ngOnInit() {
  }
  addStadium() {
    let stadiums = JSON.parse(localStorage.getItem("stadiums") || "[]")
    this.stadium.id =  this.generatedId(stadiums) 
    stadiums.push(this.stadium)
    localStorage.setItem("stadiums", JSON.stringify(stadiums));
    this.router.navigate

  }
  generatedId(T:any){
    let max;
    if (T.length == 0) {
        max = 0;
    }

    else {

        max = T[0].id;
        for (var i = 1; i < T.length; i++) {

            if (T[i].id > max) {
                max = T[i].id;
            }
        }
    }

    return (max+1);


}

  }
  