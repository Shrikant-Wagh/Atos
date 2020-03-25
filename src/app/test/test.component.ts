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
public isTextdisplay=true;

  mycolor={'color':'black'};
  changeColor()
  {

    this.mycolor.color="red";
    
  }

  displayText(event){
    this.isTextdisplay = false;
    }
  onClickMe()
  {
    
    this.clickMessage=((document.getElementById("getTx")as HTMLInputElement).value);
  }


  isTxtdisp1=true;
  isTxtdisp2=true;
  displaydata(){
    this.isTxtdisp1 = false;
     }
    
     displayInputBox(){
      this.isTxtdisp2=false;
     }

public colors=["Red" ,"Blue","Green", "Black","Yellow"]

  constructor() { }

  ngOnInit(): void {
  }

}
