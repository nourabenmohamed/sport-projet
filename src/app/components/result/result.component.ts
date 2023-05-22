import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { MatchService } from 'src/app/service/match.service';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {
commentForm:FormGroup;
comment:any={};
id:any;
commentsTab:any=[];
  @Input() matcheInput: any;
  constructor( private matchService:MatchService) { }

  ngOnInit() {
  this.id=localStorage.getItem("userId");
  }
  addComment(){
     
     this.comment.userId=localStorage.getItem("userId");
     this.comment. matchId=this.matcheInput._id;
     this.matchService.addComment(this.comment).subscribe()
     

  }

  // scoreColor(s1, s2) {
  //   if (s1 > s2) {
  //     return "green";
  //   } else if (s1 < s2) {
  //     return "orange";
  //   } else {
  //     return "blue";
  //   }
  // }

}
