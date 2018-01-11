import { Component } from '@angular/core';
import { MyDataService } from './my-data.service';
import {FormsModule} from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 constructor( private newservice: MyDataService){}
 ngoninit(){
  console.log(this.newservice.success())
 console.log(this.newservice.obj)
  
}}
 

