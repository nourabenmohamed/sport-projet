import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-search-team',
  templateUrl: './search-team.component.html',
  styleUrls: ['./search-team.component.css']
})
export class SearchTeamComponent implements OnInit {
  team:any={};
  searchForm:FormGroup;
  findedTeam:{};
  teams:any=[];
  staduims:any=[];
  players:any=[];
  

  constructor() { }

  ngOnInit() {
    this.teams=JSON.parse(localStorage.getItem("teams") || "[]");
    this.staduims=JSON.parse(localStorage.getItem("staduims") || "[]");
    this.players=JSON.parse(localStorage.getItem("players") || "[]");
  }
  search(){
    this.findedTeam={};
    let teamName=this.team.name;
    for (let i = 0; i < this.teams.length; i++) {
      if ((this.team[i].name).toLowerCase()==teamName.toLowerCase()) {
        this.findedTeam=this.teams[i];
        break;
        
      }
      
    }

  }
  searchTeamStaduim(sId){
    return this.staduims.find((obj) => {return obj.id==sId}) };
  }
  

  


