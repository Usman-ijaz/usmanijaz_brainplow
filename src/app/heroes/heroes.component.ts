import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  constructor() { }
  hero = 'Windstorm';
  id:1;
  name: 'Windstorm';
// export class hero {
//   id: number;
//   name: string;
// }


  ngOnInit() {
    
  }
  

}
