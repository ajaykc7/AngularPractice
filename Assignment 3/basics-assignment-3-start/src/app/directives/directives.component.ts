import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css']
})
export class DirectivesComponent implements OnInit {

  isParagraphVisible:boolean=true;
  logHistory:Array<Number>;
  constructor() { 
    this.logHistory=[];
  }
  
  ngOnInit() {
  }

  onToggleButton(event:Event){
    this.isParagraphVisible = !this.isParagraphVisible;
    this.logHistory.push(this.logHistory.length+1);
    
  }

  getColor():string{
    return this.logHistory[this.logHistory.length-1] < 5 ? 'orange' : 'blue';
  }

}
