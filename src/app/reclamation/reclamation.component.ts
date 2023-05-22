import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReclamationService } from '../service/reclamation.service';

@Component({
  selector: 'app-reclamation',
  templateUrl: './reclamation.component.html',
  styleUrls: ['./reclamation.component.css']
})
export class ReclamationComponent implements OnInit {
  reclamationForm:FormGroup;
  userReclamations:any=[];
  id:any;
  constructor(private formBuilder:FormBuilder,
    private reclamationService:ReclamationService) { }

  ngOnInit() {
    this.id=localStorage.getItem('userId');
    this.reclamationService.getAllUserRelamations(this.id).subscribe(
      (data)=>{
        this.userReclamations=data.reclamations;
      }
    )
    this.reclamationForm=this.formBuilder.group({
      subject:["",[Validators.required]],
      description:["",[Validators.required]],
    });
  }

  addReclamation(){
    console.log("here object",this.reclamationForm.value);
    let id=localStorage.getItem("userId");
    this.reclamationForm.value.userId=id;
    this.reclamationService.addReclamation(this.reclamationForm.value).subscribe(
      (data)=>{
        console.log('here data after save',data.isAdded);
        
      }
    );
    
  }

}
