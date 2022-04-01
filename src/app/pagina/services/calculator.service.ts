import { Injectable } from '@angular/core';
import { IonicModule } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class CalculatorService {

  constructor() { }
  
  // Calculates the Resistance
  calculate(digits, multiplier) {
    let result = digits * Math.pow(10, multiplier);
    if (result > 1000000000) {
      return (result / 1000000000).toString() + 'G';
    } else if (result > 1000000) {
      return (result / 1000000).toString() + 'M';
    } else if (result > 1000) {
      return (result / 1000).toString() + 'K';
    } else {
      return result.toString();
    }
      
  }
  
  
}
