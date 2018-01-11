import { Component, OnInit } from '@angular/core';
import { MyDataService } from '../my-data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor( private newservice: MyDataService){}

  ngOnInit() {
    console.log(this.newservice.success())
    console.log(this.newservice.obj)
  }

}
