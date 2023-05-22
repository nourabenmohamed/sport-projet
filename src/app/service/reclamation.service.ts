import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ReclamationService {
  reclamationURL:string="http://localhost:3000/reclamations";
  constructor(private httpClient:HttpClient) { }

  addReclamation(obj){
    return this.httpClient.post<{isAdded:boolean}>(this.reclamationURL,obj);

  }

  getAllUserRelamations(id){
    return this.httpClient.get<{reclamations:any}>(`${this.reclamationURL}/${id}`);
    
  }
}
