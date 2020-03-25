import { Component, OnInit } from '@angular/core';
import { strict } from 'assert';

@Component({
  selector: 'app-test',
  templateUrl: 'test.component.html'
})
export class TestComponent implements OnInit {

  clickMessage ='';
  public name='';
  public email='';
  public city='';
  public pass='';
  public country='';

  
  onClickMe()
  {
    
    this.clickMessage=((document.getElementById("getTx")as HTMLInputElement).value);
  }
  constructor() { }

  ngOnInit(): void {
  }

}
