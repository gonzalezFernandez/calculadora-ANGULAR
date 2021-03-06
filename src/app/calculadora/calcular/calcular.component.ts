import { Component, Input, OnInit } from '@angular/core';
import { CalculadoraService } from '../services/calculadora.service';

@Component({
  selector: 'app-calcular',
  templateUrl: './calcular.component.html'

})
export class CalcularComponent {

  @Input() valor1:number = NaN;
  @Input() valor2:number = NaN;


  constructor(private servicio:CalculadoraService){ }

  public suma():void
	{
		this.servicio.suma(this.valor1,this.valor2);
	}

	public Multiplicacion():void
	{
		this.servicio.Multiplicacion(this.valor1,this.valor2);
	}

	public Resta():void
	{
		this.servicio.Resta(this.valor1,this.valor2);
	}

	public Division():void
	{
		this.servicio.Division(this.valor1,this.valor2);
	}

    public Limpiar():void
    {
      this.valor1 = NaN;
      this.valor2 = NaN;

      this.servicio.resultado = 0;

    }

}
