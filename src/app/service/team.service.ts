import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TeamService {
  //Backend serveur Adress
  teamURL: string = "http://localhost:3000/teams";
  // httpClient:un serveur
   constructor(private httpClient: HttpClient) { }
   //return pour récuperer la réponse qui est Array of objects
   getAllTeams(){
    return this.httpClient.get<{teamsArray:any,message:string}>(this.teamURL);
   }
   //Response:one object
   getTeamById(id:any){
    return this.httpClient.get<{team:any}>(`${this.teamURL}/${id}`);
   }
   //Response:message /booleen
   deleteTeam(id:any){
    return this.httpClient.delete<{isDeleted:boolean}>(`${this.teamURL}/${id}`);
   }
   //Response:Message/booleen
   addTeam(teamObj){
    return this.httpClient.post<{message:string}>(this.teamURL,teamObj);
   }
    // Response : Message/booleen
    editTeam(newTeam){
      return this.httpClient.put<{isUpdated:boolean}>(this.teamURL,newTeam);
    }
}
