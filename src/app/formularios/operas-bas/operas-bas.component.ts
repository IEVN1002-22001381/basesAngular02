import { Component } from '@angular/core';

@Component({
  selector: 'app-operas-bas',
  standalone: false,
  templateUrl: './operas-bas.component.html',
  styleUrl: './operas-bas.component.css'
})
export class OperasBasComponent {

  num1:string="";
  num2:string="";
  res:string="";
  tipo:string="";

  
  sumar():void{
    this.res=(parseInt(this.num1)+parseInt(this.num2)).toString();
  }
  restar():void{
    this.res=(parseInt(this.num1)-parseInt(this.num2)).toString();
  }
  multi():void{
    this.res=(parseInt(this.num1)*parseInt(this.num2)).toString();
  }
  div():void{
    this.res=(parseInt(this.num1)/parseInt(this.num2)).toString();
  }

  operacion(){
    switch (this.tipo) {
    case "restar":
      this.restar();
      break;
  
    case "sumar":
      this.sumar();
      break;

    case "multi":
      this.multi();
      break;

    case "div":
      this.div();
      break;

    default:
      break;
  }
  }
}
