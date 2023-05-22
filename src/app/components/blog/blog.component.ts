import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {
  articles:any=[
    {image:"assets/images/img_1.jpg",date:"3/05/2020",title:"title1",description:"description1"},
    {image:"assets/images/img_2.jpg",date:"7/03/2021",title:"title2",description:"description2"},
    {image:"assets/images/img_3.jpg",date:"1/04/2019",title:"title3",description:"description3"},
  ]


  constructor() { }

  ngOnInit() {
  }

}
