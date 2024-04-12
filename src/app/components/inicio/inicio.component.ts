import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { Person } from '../person.interface';

enum Genders {
  Male = 'Masculino',
  Female = 'Femenino',
}

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css'],
})
export class InicioComponent {
  private router = inject(Router);
  public pesoActual: number = 50;
  public edadActual: number = 10;
  public alturaActual: number = 170;
  private person?: Person;

  public generoActual?: Genders;

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
    if (this.generoActual === undefined) {
      alert('Seleccione el género para poder calcular');
      return;
    }
    this.person = {
      peso: this.pesoActual,
      altura: this.alturaActual,
      edad: this.edadActual,
      genero: this.generoActual,
    };
    this.router.navigate(['/resultado', this.person]);
    console.log('Person: ', this.person);
  }
  get persona() {
    return this.person;
  }

  cambiarAltura(event: any) {
    this.alturaActual = Number(event.target.value);
  }

  private cambiarGenero(genero: Genders) {
    this.generoActual = genero;
  }

  isMale(gender: boolean) {
    if (gender) {
      this.cambiarGenero(Genders.Male);
    } else {
      this.cambiarGenero(Genders.Female);
    }
  }
}
