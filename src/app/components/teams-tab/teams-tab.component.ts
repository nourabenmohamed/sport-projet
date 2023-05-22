import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-teams-tab',
  templateUrl: './teams-tab.component.html',
  styleUrls: ['./teams-tab.component.css']
})
export class TeamsTabComponent implements OnInit {
  teams: any = [];
  stadiums: any = [];
  findedStadium:any={};
  constructor(private router: Router) { }

  ngOnInit() {
    this.teams = JSON.parse(localStorage.getItem("teams") || "[]");
    this.stadiums = JSON.parse(localStorage.getItem("stadiums") || "[]");
  }
searchStadium(x){
  
//     for (let i = 0; i < this.stadiums.length; i++) {
//       if (this.stadiums[i].id== id) {
//         this.findedStadium = this.stadiums[i];
//         break;
        
//       }
      
//     }

// return this.findedStadium;

return this.stadiums.find((elt) => {return elt.id == x});



}




  goToEdit(id: any) {

    this.router.navigate([`editTeam/${id}`]);

  }
  goToDisplay(id: any) {

    this.router.navigate([`displayTeam/${id}`]);

  }




  deleteTeam(id) {

    for (let i = 0; i < this.teams.length; i++) {
      if (this.teams[i].id == id) {
        this.teams.splice(i, 1);
        break;
      }
    }
    localStorage.setItem("teams", JSON.stringify(this.teams));
  }
}

