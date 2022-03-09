import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-omar-com',
  templateUrl: './omar-com.component.html',
  styleUrls: ['./omar-com.component.css'],
})
export class OmarComComponent implements OnInit {
  @Input('email') email: string;
  @Input('phone') phone: string;
  constructor() {}

  ngOnInit() {}
}
