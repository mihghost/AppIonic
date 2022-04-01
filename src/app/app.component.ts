import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Lei de Ohm', url: '/home', icon: 'calculator' },
    { title: 'Valor-Resistor', url: '/cod-cores', icon: 'color-palette' },
    { title: 'Matéria', url: '/aprender', icon: 'book' },
    { title: 'Quiz', url: '/quiz', icon: 'bulb' },

  


  ];

  constructor() {}
}
