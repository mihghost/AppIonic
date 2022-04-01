import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-aprender',
  templateUrl: './aprender.page.html',
  styleUrls: ['./aprender.page.scss'],
})
export class AprenderPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  segmentChanged(ev: any) {
    console.log('Segment changed', ev);
  }
}
