import { Component } from '@angular/core';
import { Resistencia, Banda } from './resistencia';

@Component({
  selector: 'app-resistencia',
  standalone: false,
  templateUrl: './resistencias.component.html',
  styleUrls: ['./resistencias.component.css']
})
export class ResistenciasComponent {

  colores = Resistencia.bandas;
  multiplicadores = Resistencia.multiplicadores;
  tolerancias = Resistencia.tolerancias;

  resistencia: Resistencia = new Resistencia();

  calcular() {
    const resultado = this.resistencia.calcular(
      this.resistencia.color1,
      this.resistencia.color2,
      this.resistencia.color3,
      this.resistencia.tolerancia
    );

    this.resistencia.valor = resultado.valor;
    this.resistencia.valorMaximo = resultado.valorMaximo;
    this.resistencia.valorMinimo = resultado.valorMinimo;
  }

  getColorValue(colorName: string): string {
    const colorMap: { [key: string]: string } = {
      'Negro': '#000000',
      'Café': '#8B4513',
      'Rojo': '#FF0000',
      'Naranja': '#FFA500',
      'Amarillo': '#FFFF00',
      'Verde': '#008000',
      'Azul': '#0000FF',
      'Violeta': '#EE82EE',
      'Gris': '#808080',
      'Blanco': '#FFFFFF',
      'Dorado 5%': '#FFD700',
      'Plata 10%': '#C0C0C0'
    };
    
    if (colorName.includes('Dorado')) return '#FFD700';
    if (colorName.includes('Plata')) return '#C0C0C0';
    
    return colorMap[colorName] || '#CCCCCC';
  }
}