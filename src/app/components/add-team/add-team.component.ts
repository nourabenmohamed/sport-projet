import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { TeamService } from 'src/app/service/team.service';

@Component({
  selector: 'app-add-team',
  templateUrl: './add-team.component.html',
  styleUrls: ['./add-team.component.css']
})
export class AddTeamComponent implements OnInit {

teamObj:any;
  constructor(private teamService:TeamService,private router:Router) { }

  ngOnInit() {
    this.teamService.addTeam(this.teamObj).subscribe(
     (data)=>{
      console.log('here data from BE',data.message);
          this.router.navigate(["admin"]);
     }
    );
  }

  // match ID
  teamForm: FormGroup;

  // match Obj
  team: any = {};

  // // methode new team
  // addTeam() {
  //   let teams = JSON.parse(localStorage.getItem("teams") || "[]")
  //   this.team.id = this.generateId(teams) + 1
  //   teams.push(this.team)
  //   localStorage.setItem("teams", JSON.stringify(teams));
  // }

  // //methode generate ID
  // generateId(tab: any) {

  //   var max: any;
  //   if (tab.length == 0) {
  //     max = 0;
  //   }
  //   else {
  //     max = tab[0].id;
  //     for (var i = 1; i < tab.length; i++) {
  //       if (tab[i].id > max) {
  //         max = tab[i].id;
  //       }


  //     }
  //   }
  //   return max;

  // }
}

