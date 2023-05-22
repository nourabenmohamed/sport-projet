import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { generateId } from 'src/app/shared/generatedId';




@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css']
})
export class StoreComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
   // match ID
   storeForm: FormGroup;
   // match Obj
   store: any = {};
   // methode add new match
  addStore() {
   
    let stores = JSON.parse(localStorage.getItem("stores") || "[]")
    this.store.id = generateId(stores) 
    stores.push(this.store)
    localStorage.setItem("stores", JSON.stringify(stores));
  }
   
  
}
 


