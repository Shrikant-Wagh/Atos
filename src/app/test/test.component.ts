import { Component, OnInit } from '@angular/core';
import { strict } from 'assert';

@Component({
  selector: 'app-test',
  template: `
  
  
  <input id="getTx" type="text"><br>
 
  <button (click)="onClickMe()"> Click Me </button><br>
  <p>{{clickMessage}}</p>
 
  `
})
export class TestComponent implements OnInit {

  clickMessage ='';
  value='';

  
  onClickMe()
  {
    
    this.clickMessage=((document.getElementById("getTx")as HTMLInputElement).value);
  }
  constructor() { }

  ngOnInit(): void {
  }

}
