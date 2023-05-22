import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class MatchService {
  //Backend serveur Adress
  matchURL: string = "http://localhost:3000/matches";
  // httpClient:un serveur
  constructor(private httpClient: HttpClient) { }

  //return pour récuperer la réponse qui est Array of objects
  getAllMatches() {
    return this.httpClient.get<{ matchesArray: any, message: string }>(this.matchURL);
  }
  //Response:one object
  getMatchById(id: any) {
    return this.httpClient.get<{ match: any }>(`${this.matchURL}/${id}`);
  }
  //Response:message /booleen
  deleteMatch(id: any) {
    return this.httpClient.delete<{ isDeleted: Boolean }>(`${this.matchURL}/${id}`);
  }
  //Response:Message/booleen
  addMatch(matchObj) {
    return this.httpClient.post<{ message: string }>(this.matchURL, matchObj);

  }
  // Response : Message/booleen
  editMatch(newMatch) {
    return this.httpClient.put<{ isUpdated: boolean }>(this.matchURL, newMatch);


  }

  searchMatchesByScores(obj) {
    return this.httpClient.post<{ searchTab: any }>(`${this.matchURL}/search`, obj);

  }

   // Response:Boolean
addComment(obj){
  return this.httpClient.post<{message:string}>("http://localhost:3000/matches/comment", obj);
}
getComments(){
  return this.httpClient.get<{matches:any}>(`${this.matchURL}/comments/getAll`);
}


}
