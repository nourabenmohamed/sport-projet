import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatchService } from 'src/app/service/match.service';

@Component({
  selector: 'app-matches-tab',
  templateUrl: './matches-tab.component.html',
  styleUrls: ['./matches-tab.component.css']
})
export class MatchesTabComponent implements OnInit {
  matches: any = [];
  match: any = {};
  constructor(private router: Router, private matchService: MatchService) { }

  ngOnInit() {
    this.matchService.getAllMatches().subscribe(
      (data) => {
        this.matches = data.matchesArray;
      }
    )
  }

  displayMatch(x: any) {
    localStorage.setItem("matchId", x);
    this.router.navigate(["matchInfo"]);
  }

  goToEdit(id: any) {

    this.router.navigate([`editMatch/${id}`]);

  }
  deleteMatch(id) {


    this.matchService.deleteMatch(id).subscribe(
      (data) => {
        console.log("Here response from BE", data.isDeleted);
        this.matchService.getAllMatches().subscribe(
          (data) => {
            this.matches = data.matchesArray;
          }
        );
      })

  }
}