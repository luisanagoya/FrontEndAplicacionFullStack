import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directiva',
  templateUrl: './directiva.component.html',

})
export class DirectivaComponent {

  listacurso:string[]=['Typescript','JavaScript','JavaSE','C#', 'PHP'];
  habilitar:boolean=true;


  constructor() { }

  setHabilitar(): void{

  this.habilitar = (this.habilitar==true)?false:true;
  }



}
