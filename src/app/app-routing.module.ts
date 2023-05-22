import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { SignupComponent } from './components/signup/signup.component';
import { AddTeamComponent } from './components/add-team/add-team.component';
import { AddMatchComponent } from './components/add-match/add-match.component';
import { AdminComponent } from './components/admin/admin.component';
import { MatchesComponent } from './components/matches/matches.component';
import { MatchInfoComponent } from './components/match-info/match-info.component';
import { TeamInfoComponent } from './components/team-info/team-info.component';
import { LoginComponent } from './components/login/login.component';
import { AddPlayerComponent } from './components/add-player/add-player.component';
import { PlayersComponent } from './components/players/players.component';
import { SearchComponent } from './components/search/search.component';
import { AddStadiumComponent } from './components/add-stadium/add-stadium.component';
import { SearchTeamComponent } from './components/search-team/search-team.component';
import { SignupAdminComponent } from './components/signup-admin/signup-admin.component';
import { ProfileComponent } from './components/profile/profile.component';
import { WeatherComponent } from './components/weather/weather.component';
import { ReclamationComponent } from './reclamation/reclamation.component';






const routes: Routes = [
  // http://localhost:4200/=>Home Component will be displayed
    {path:"",component:HomeComponent},
// http://localhost:4200/=>Login Component will be displayed
    {path:"login",component:LoginComponent},
// http://localhost:4200/=>Signup Component will be displayed
    {path:"signup",component:SignupComponent},
    {path:"Add-match",component:AddMatchComponent},
    {path:"Add-team",component:AddTeamComponent},
    {path:"Add-player",component:AddPlayerComponent},
    {path:"Admin",component:AdminComponent},
    {path:"players",component:PlayersComponent},
    {path:"matches",component:MatchesComponent},
    {path:"matchInfo",component:MatchInfoComponent},
    {path:"team-Info",component:TeamInfoComponent},
    {path:"searchMatches",component:SearchComponent},
    {path:"addStadium",component:AddStadiumComponent},
    {path:"searchTeam",component:SearchTeamComponent},
    {path:"SignupAdmin",component:SignupAdminComponent},
    {path:"profile/:id",component:ProfileComponent},
    {path:"weather",component:WeatherComponent},
    {path:"reclamation",component:ReclamationComponent},
   
   
   
    
   
    

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
