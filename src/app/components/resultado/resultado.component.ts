import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Person } from '../person.interface';
import { pipe, switchMap } from 'rxjs';

@Component({
  selector: 'app-resultado',
  templateUrl: './resultado.component.html',
  styleUrls: ['./resultado.component.css'],
})
export class ResultadoComponent implements OnInit {
  private params = inject(ActivatedRoute);
  public person?: Person | Params;
  private router = inject(Router);
  private _resultado = '';
  private _interpretacion = '';
  ngOnInit(): void {
    this.params.params.subscribe((params) => {
      console.log('Result: ', (this.person = params));
      this.bmiResult();
    });
  }
  goBack(): void {
    this.router.navigate(['/']);
  }

  bmiResult() {
    const bmi = this.person?.peso / Math.pow(this.person!.altura! / 100, 2);
    console.log('CurrentBmi: ', bmi.toFixed(2));

    if (bmi >= 25) {
      this._resultado = 'Exceso de Peso';
      this._interpretacion =
        'Tienes un peso corporal superior al promedio normal. Debes cuidar tu salud';
    } else if (bmi >= 18.5) {
      this._resultado = 'Normal';
      this._interpretacion =
        'Tu peso es normal según el índice de masa corporal. Mantenlo así para mantener una buena salud';
    } else {
      this._resultado = 'Pérdida de peso';
      this._interpretacion =
        'Estás muy debilitado o tenés un bajo peso. Es importante que te des cuenta y trabajes en tu alimentación y actividad física';
    }
  }

  get resultado(): string {
    return this._resultado;
  }
  get interpretacion(): string {
    return this._interpretacion;
  }
}
