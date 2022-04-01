import { TestBed } from '@angular/core/testing';

import { CalculatorService } from './calculator.service';
import { Type } from '@angular/core';
import { IonicModule } from '@ionic/angular';

describe('CalculatorService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CalculatorService = TestBed.inject<CalculatorService>(CalculatorService);
    expect(service).toBeTruthy();
  });
  
   it('#calculate should return 0 with no conversion with default', () => {
    const service: CalculatorService = TestBed.inject<CalculatorService>(CalculatorService);
    expect(service.calculate(0, 1)).toEqual('0');
  });
  
  it('#calculate with 3 values and black returns value with no conversion', () => {
    const service: CalculatorService = TestBed.inject<CalculatorService>(CalculatorService);
    expect(service.calculate(489, 0)).toEqual('489');
  });
  
  it('#calculate with 3 values and brown, red and orange multiplier should return value with K conversion', () => {
    const service: CalculatorService = TestBed.inject<CalculatorService>(CalculatorService);
    expect(service.calculate(531, 1)).toEqual('5.31K');
    expect(service.calculate(531, 2)).toEqual('53.1K');
    expect(service.calculate(531, 3)).toEqual('531K');
  });
  
   it('#calculate with 3 values and yellow, green and blue multiplier should return value with M conversion', () => {
    const service: CalculatorService =TestBed.inject<CalculatorService>(CalculatorService);
    expect(service.calculate(620, 4)).toEqual('6.2M');
    expect(service.calculate(825, 5)).toEqual('82.5M');
    expect(service.calculate(601, 6)).toEqual('601M');
  });
  
  it('#calculate with 3 values and violet, grey and white multiplier should return value with G conversion', () => {
    const service: CalculatorService = TestBed.inject<CalculatorService>(CalculatorService);
    expect(service.calculate(312, 7)).toEqual('3.12G');
    expect(service.calculate(115, 8)).toEqual('11.5G');
    expect(service.calculate(420, 9)).toEqual('420G');
  });
  
  it('#calculate with 2 values (dropped leading 0) should return value with appropriate conversion', () => {
    const service: CalculatorService = TestBed.inject<CalculatorService>(CalculatorService);
    expect(service.calculate(89, 0)).toEqual('89');
    expect(service.calculate(31, 1)).toEqual('310');
    expect(service.calculate(51, 2)).toEqual('5.1K');
    expect(service.calculate(53, 3)).toEqual('53K');
    expect(service.calculate(62, 4)).toEqual('620K');
    expect(service.calculate(85, 5)).toEqual('8.5M');
    expect(service.calculate(60, 6)).toEqual('60M');
    expect(service.calculate(31, 7)).toEqual('310M');
    expect(service.calculate(11, 8)).toEqual('1.1G');
    expect(service.calculate(42, 9)).toEqual('42G');
  });
  
});
