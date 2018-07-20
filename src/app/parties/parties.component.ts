import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parties',
  templateUrl: './parties.component.html',
  styleUrls: ['./parties.component.css']
})
export class PartiesComponent implements OnInit {
  /*
  hero = 'Windstorm';
  */
  constructor() { }

  ngOnInit() {
  }
  
  isClicked : boolean = false;
  isClicked1 :boolean= false;
 
 callAgentContact (){
  this.isClicked1 = !this.isClicked1;
 }
 callAgentAlert (){
   this.isClicked = !this.isClicked;
 }
   

}