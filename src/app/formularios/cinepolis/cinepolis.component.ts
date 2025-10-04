import { Component } from '@angular/core';

@Component({
  selector: 'app-cinepolis',
  standalone: false,
  templateUrl: './cinepolis.component.html',
  styleUrl: './cinepolis.component.css'
})
export class CinepolisComponent {

  nombre:string="";
  cantcompradores:string="";
  cantboletos:string="";
  maxboletos:string="";
  tarjeta:string="";
  subtotal:string="";
  total:string="";
  precio:number=12;
  mensaje:string="";


  max():boolean{ //esta es la funcion que tienes que quitar o cambiar
    this.maxboletos=(parseFloat(this.cantcompradores)*7).toString();
    if (parseInt(this.cantboletos) > parseInt(this.maxboletos)) {
      this.mensaje = `No puedes comprar más de ${this.maxboletos} boletos.`;
      this.total = ""; 
      return false;
    }
    this.mensaje = ""; 
    return true; 
  }

  desc1():void{
    this.subtotal=(parseFloat(this.cantboletos)*this.precio).toString();
    this.subtotal=(parseFloat(this.subtotal)*0.85).toString();
  }
  desc2():void{
    this.subtotal=(parseFloat(this.cantboletos)*this.precio).toString();
    this.subtotal=(parseFloat(this.subtotal)*0.90).toString();
  }
  sub1():void{
    this.subtotal=(parseFloat(this.cantboletos)*this.precio).toString();
  }

  tottarj():void{
    this.total=(parseFloat(this.subtotal)*0.90).toString();
  }


  calculo(){
    if (!this.max()) {
      return;
    }
    switch(this.tarjeta){
          case "1":
            if(parseInt(this.cantboletos)>5){
              this.desc1();
            }
            else if (parseInt(this.cantboletos)>=3 && parseInt(this.cantboletos)<=5){
              this.desc2();
            }
            else if(parseInt(this.cantboletos)>3){
              this.sub1();
            }

            this.tottarj();

          break;

          case "2":
            if(parseInt(this.cantboletos)>5){
              this.desc1();
            }
            else if (parseInt(this.cantboletos)>=3 && parseInt(this.cantboletos)<=5){
              this.desc2();
            }
            else if(parseInt(this.cantboletos)>3){
              this.sub1();
            }

            this.total = this.subtotal;

          break;

        }
  }




}
