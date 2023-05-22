import { Component, OnInit } from '@angular/core';
import { FormGroup,} from '@angular/forms';
import { Router,} from '@angular/router';
import { PlayerService } from 'src/app/service/player.service';


@Component({
  selector: 'app-add-player',
  templateUrl: './add-player.component.html',
  styleUrls: ['./add-player.component.css']
})
export class AddPlayerComponent implements OnInit {
  // match ID
  playerObj: any;
  // match Obj
  player: any = {};
  teams:any={};


  constructor(private router:Router,private playerService:PlayerService) { }

  ngOnInit() {
    this.playerService.addPlayer(this.playerObj).subscribe(
      (data)=>{
        console.log('here data from BE',data.message);
          this.router.navigate(["admin"]);
      }

    );
   
  }


  

  // methode new player
 

  //methode generate ID
  
}
