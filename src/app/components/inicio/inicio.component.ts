import { Component } from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css'],
})
export class InicioComponent {
  public pesoActual: number = 50;
  public edadActual: number = 10;
  public alturaActual: number = 170;

  subirPeso(cantidad: number) {
    this.pesoActual += cantidad;
  }
  bajarPeso(cantidad: number) {
    if (this.pesoActual - cantidad < 0) {
      alert('No se puede bajar de peso');
    } else {
      this.pesoActual -= cantidad;
    }
  }
  subirEdad(years: number) {
    this.edadActual += years;
  }
  bajarEdad(years: number) {
    if (this.edadActual - years < 0) {
      alert('La edad mínima es cero años');
    } else {
      this.edadActual -= years;
    }
  }

  calcularBmi() {
    const person = {
      peso: this.pesoActual,
      altura: this.alturaActual,
      edad: this.edadActual,
    };
    console.log('Person: ', person);
  }

  cambiarAltura(event: any) {
    this.alturaActual = Number(event.target.value);
  }
}
