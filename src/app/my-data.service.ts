import { Injectable } from '@angular/core';

@Injectable()
export class MyDataService {

  constructor() { }
  obj = {
    id: "1",
    name: "Usman",
    rollno: "655"
  }
success (){
  return "Successful";
}
}
