import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { ResultComponent } from './components/result/result.component';
import { NewsComponent } from './components/news/news.component';
import { StatsComponent } from './components/stats/stats.component';
import { BlogComponent } from './components/blog/blog.component';
import { SignupComponent } from './components/signup/signup.component';
import { HomeComponent } from './components/home/home.component';
import { CupEventComponent } from './components/cup-event/cup-event.component';
import { AddTeamComponent } from './components/add-team/add-team.component';
import { AddMatchComponent } from './components/add-match/add-match.component';
import { AdminComponent } from './components/admin/admin.component';
import { TeamsTabComponent } from './components/teams-tab/teams-tab.component';
import { ArticleComponent } from './components/article/article.component';
import { InfoComponent } from './components/info/info.component';
import { MatchesComponent } from './components/matches/matches.component';
import {FormsModule,ReactiveFormsModule} from'@angular/forms';
import { MatchesTabComponent } from './components/matches-tab/matches-tab.component';
import { MatchInfoComponent } from './components/match-info/match-info.component';
import { TeamInfoComponent } from './components/team-info/team-info.component';
import { LoginComponent } from './components/login/login.component';
import { ReversePipe } from './pipes/reverse.pipe';
import { AsterixPipe } from './pipes/asterix.pipe';
import { AddPlayerComponent } from './components/add-player/add-player.component';
import { PlayerComponent } from './components/player/player.component';
import { PlayersComponent } from './components/players/players.component';
import { PlayersTableComponent } from './components/players-table/players-table.component';
import { UsersTabComponent } from './components/users-tab/users-tab.component';
import { EditMatchComponent } from './components/edit-match/edit-match.component';
import { EditTeamComponent } from './components/edit-team/edit-team.component';
import { SearchComponent } from './components/search/search.component';
import { AddStadiumComponent } from './components/add-stadium/add-stadium.component';
import { SearchTeamComponent } from './components/search-team/search-team.component';
import { StoreComponent } from './components/store/store.component';
import { HttpClientModule } from '@angular/common/http';
import { SignupAdminComponent } from './components/signup-admin/signup-admin.component';
import { ProfileComponent } from './components/profile/profile.component';
import { WeatherComponent } from './components/weather/weather.component';
import { ReclamationComponent } from './reclamation/reclamation.component';







@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ResultComponent,
    NewsComponent,
    StatsComponent,
    BlogComponent,
    SignupComponent,
    HomeComponent,
    CupEventComponent,
    AddTeamComponent,
    AddMatchComponent,
    AdminComponent,
    TeamsTabComponent,
    ArticleComponent,
    InfoComponent,
    MatchesComponent,
    MatchesTabComponent,
    MatchInfoComponent,
    TeamInfoComponent,
    LoginComponent,
    ReversePipe,
    AsterixPipe,
    AddPlayerComponent,
    PlayerComponent,
    PlayersComponent,
    PlayersTableComponent,
    UsersTabComponent,
    EditMatchComponent,
    EditTeamComponent,
    SearchComponent,
    AddStadiumComponent,
    SearchTeamComponent,
   ProfileComponent,
  
   
    StoreComponent,
   
  
   
    SignupAdminComponent,
   
  
   
    WeatherComponent,
   
  
   
    ReclamationComponent,
   
  
   
   
   
   
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
