import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  //Backend serveur Adress
  userURL: string = "http://localhost:3000/users";

  constructor(private http: HttpClient) { }
  //user:{firstName,lastName,email,pwd...}
  signup(user:any,file:File) {
    let formData=new FormData();
    formData.append("firstName",user.firstName);
    formData.append("lastName",user.lastName);
    formData.append("email",user.email);
    formData.append("pwd",user.pwd);
    formData.append("role",user.role);
    formData.append("adresse",user.adresse);
    formData.append("img",file);
    if (user.tel) {
      formData.append("tel",user.tel);
    }
    return this.http.post<{ message: boolean}>
    (this.userURL + "/signup", formData);

  }

  
  //user:{email,pwd}
  login(user) {
    return this.http.post<{ message: string, user: any }>(this.userURL + "/login", user);
  }

  getUserById(id){
    return this.http.get<{user:any}>(`${this.userURL}/${id}`);

  }
}
