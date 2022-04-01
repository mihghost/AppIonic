

 
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CalculatorService } from './../services/calculator.service';
 
@Component({
  selector: 'app-cod-cores',
  templateUrl: './cod-cores.page.html',
  styleUrls: ['./cod-cores.page.scss'],
})
 
 
export class CodCoresPage  implements OnInit {
  public resistance;
  public digit1; 
  public digit2;
  public digit3;
  public multiplier;
  public tolerance;
  public digits = [
    { color: 'Preto', value: 0 },
    { color: 'Marrom', value: 1 },
    { color: 'Vermelho', value: 2 },
    { color: 'Laranja', value: 3 },
    { color: 'Amarelo', value: 4 },
    { color: 'Verde', value: 5 },
    { color: 'Azul', value: 6 },
    { color: 'Violeta', value: 7 },
    { color: 'Cinza', value: 8 },
    { color: 'Branco', value: 9 }
  ];
  public multipliers;
  public tolerances = [
    { color: 'Marrom', value: 1 },
    { color: 'Vermelho', value: 2 },
    { color: 'Laranja', value: 3 },
    { color: 'Amarelo', value: 4 },
    { color: 'Verde', value: 0.5 },
    { color: 'Azul', value:  0.25 },
    { color: 'Violeta', value: 0.10 },
    { color: 'Cinza', value: 0.05 },
    { color: 'Dourado', value: 5 },
    { color: 'Prata', value: 10 },
    { color: 'None', value: 20 },
  ];
    
  constructor(private calculatorService: CalculatorService) { 
    this.multipliers = this.digits.slice(0);
    this.multipliers.push( 
      { color: 'Dourado', value: -1 },
      { color: 'Prata', value: -2 }
      );
    this.digit1 = this.digits[0].value;
    this.digit2 = this.digits[0].value;
    this.digit3 = this.digits[0].value;
    this.multiplier = this.multipliers[0].value;
    this.tolerance = this.tolerances[0].value;
    
  }
 
  ngOnInit() {
    this.calculate();
  }
  
  // Calculates the resistance
  calculate() {
    let digit = this.digit1.toString() + this.digit2.toString() + this.digit3.toString();
    this.resistance = this.calculatorService.calculate(Number(digit), this.multiplier) + ' ohms +/-' + this.tolerance.toString() + '%';
  return this.resistance
  }
 
}
