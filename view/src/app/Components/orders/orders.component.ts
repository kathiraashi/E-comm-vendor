import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {
Active_Tab = 'All';
  constructor() { }

  ngOnInit() {

  }
  Active_Tab_Change(value) {
    this.Active_Tab = value;
  }
}
