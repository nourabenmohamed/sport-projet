import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {
  title:string="Latest News";
  nbr:number=10;
  newsTab:any=[
    {image:"assets/images/img_1.jpg",title:"title1",userName:"userName1",date:"02/04/2021",avatar:"assets/images/person_1.jpg"},
    {image:"assets/images/img_2.jpg",title:"title2",userName:"userName2",date:"03/06/2020",avatar:"assets/images/person_2.jpg"},
    {image:"assets/images/img_3.jpg",title:"title3",userName:"userName3",date:"14/02/2019",avatar:"assets/images/person_3.jpg"},
    {image:"assets/images/img_2.jpg",title:"title4",userName:"userName4",date:"03/06/2020",avatar:"assets/images/person_4.jpg"},
    
  ]

  constructor() { }

  ngOnInit() {
  }
  Calcul(a:number,b:number,c:number){
    return a+b+c;
  }

}
