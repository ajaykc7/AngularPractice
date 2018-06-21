import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  userName:string;
  constructor() {
    this.userName = '';
  }

  ngOnInit() {
  }

  onResetUsername(name:string):void{
    this.userName = '';
  }

  checkUserName():Boolean{
    return this.userName == '' ? true : false;
  }
}
