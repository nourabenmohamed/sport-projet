import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {
   //Backend serveur Adress
   playerURL:string="http://localhost:3000/players";
   
   // httpClient:un serveur
    constructor(private httpClient:HttpClient) { }

    // la réponse à cette requette sera sous forme d'un tableau d'objet
    getAllPlayers(){
      return this.httpClient.get<{playersArray:any,message:string}>(this.playerURL);
    }
     //la réponse sera sous forme d'un objet
    getPlayerById(id:any){
      return this.httpClient.get<{player:any}>(`${this.playerURL}/${id}`);
    }
    //la réponse sera un msg ou boolean
    addPlayer(playerObj){
      return this.httpClient.post<{message:string}>(this.playerURL,playerObj);
       
       }
     //la reponse sera par msg ou boolean
    deletePlayer(id:any){
     return this.httpClient.delete<{isDeleted:boolean}>(`${this.playerURL}/${id}`);
    }
    //la reponse sera par msg ou boolean
     editPlayer(newPlayer){
      return this.httpClient.put<{isUpdated:boolean}>(this.playerURL,newPlayer);
     }

    

}
