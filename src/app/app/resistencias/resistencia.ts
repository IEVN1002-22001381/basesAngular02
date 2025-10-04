export interface Banda {
  nombre: string;
  valor: number;
  multiplicador?: number;
  tolerancia?: number;
}

export class Resistencia {
  static bandas: Banda[] = [
    { nombre: 'Negro', valor: 0 },
    { nombre: 'Café', valor: 1 },
    { nombre: 'Rojo', valor: 2 },
    { nombre: 'Naranja', valor: 3 },
    { nombre: 'Amarillo', valor: 4 },
    { nombre: 'Verde', valor: 5 },
    { nombre: 'Azul', valor: 6 },
    { nombre: 'Violeta', valor: 7 },
    { nombre: 'Gris', valor: 8 },
    { nombre: 'Blanco', valor: 9 }
  ];

  static multiplicadores: Banda[] = [
    { nombre: 'Negro', valor: 0, multiplicador: 1 },
    { nombre: 'Café', valor: 1, multiplicador: 10 },
    { nombre: 'Rojo', valor: 2, multiplicador: 100 },
    { nombre: 'Naranja', valor: 3, multiplicador: 1000 },
    { nombre: 'Amarillo', valor: 4, multiplicador: 10000 },
    { nombre: 'Verde', valor: 5, multiplicador: 100000 },
    { nombre: 'Azul', valor: 6, multiplicador: 1000000 },
    { nombre: 'Violeta', valor: 7, multiplicador: 10000000 },
    { nombre: 'Gris', valor: 8, multiplicador: 100000000 },
    { nombre: 'Blanco', valor: 9, multiplicador: 1000000000 }
  ];

  static tolerancias: Banda[] = [
    { nombre: 'Dorado 5%', valor: 0, tolerancia: 0.05 },
    { nombre: 'Plata 10%', valor: 0, tolerancia: 0.10 }
  ];

  color1: Banda = { nombre: '', valor: 0 };
  color2: Banda = { nombre: '', valor: 0 };
  color3: Banda = { nombre: '', valor: 0 };
  tolerancia: Banda = { nombre: '', valor: 0 };

  valor: number = 0;
  valorMaximo: number = 0;
  valorMinimo: number = 0;

  base: number = 0;
  tol: number = 0;
  subvalor: number = 0;


  calcular(color1: Banda, color2: Banda, color3: Banda, tolerancia: Banda) {
    this.base = Number(`${color1.valor}${color2.valor}`);
    this.valor = this.base * (color3.multiplicador || 1);
    this.tol = tolerancia.tolerancia || 0;

    this.subvalor = this.valor * this.tol;
    this.valorMaximo = this.valor + this.subvalor;
    this.valorMinimo = this.valor - this.subvalor;

    return {
      valor: this.valor,
      valorMaximo: this.valorMaximo,
      valorMinimo: this.valorMinimo
    };
  }
}
