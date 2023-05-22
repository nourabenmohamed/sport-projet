import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { WeatherService } from 'src/app/service/weather.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {
obj:any={};
weatherForm:FormGroup;
result:any;
  constructor(private weatherService:WeatherService) { }

  ngOnInit() {
  }


  searchWeather(){
    console.log("Here object",this.obj);
    this.weatherService.searchWeather(this.obj).subscribe(
      (data)=>{
        console.log("here response from API",data.weather);
        this.result=data.weather;
        
      }
    );
  }
}
