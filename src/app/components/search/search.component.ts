import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MatchService } from 'src/app/service/match.service';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  match:any={};
  findedMatches:any;
  matches:any=[];
  id:any;
  
  
  


  constructor(private matchService:MatchService) { }

  ngOnInit() {
    this.matchService.getAllMatches().subscribe(
      (data)=>{
      this.matches=data.matchesArray;
      }
    )
  }
  search(){
    this.matchService.searchMatchesByScores(this.match).subscribe(
      (data)=>{
        this.findedMatches=data.searchTab;
      }
    )
    

  }
}

