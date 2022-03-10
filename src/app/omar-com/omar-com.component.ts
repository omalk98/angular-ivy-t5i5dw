import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-omar-com',
  templateUrl: './omar-com.component.html',
  styleUrls: ['./omar-com.component.css'],
})
export class OmarComComponent implements OnInit {
  myPhoto: string =
    'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimg.xcitefun.net%2Fusers%2F2014%2F07%2F361487%2Cxcitefun-nature-color-5.jpg&f=1&nofb=1';
  @Input('email') email: string;
  @Input('phone') phone: string;
  constructor() {}

  ngOnInit() {}
}
