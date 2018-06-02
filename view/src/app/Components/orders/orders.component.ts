import { Component, OnInit } from '@angular/core';
import { OrderViewComponent } from '../Models/order-view/order-view.component';

import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {
Active_Tab = 'All';

bsModalRef: BsModalRef;
  constructor(private modalService: BsModalService) { }

  ngOnInit() {

  }
  Active_Tab_Change(value) {
    this.Active_Tab = value;
  }
  ViewOrder() {
    const popupMiddleSize = {
      title: 'Modal with component'
    };
    this.bsModalRef = this.modalService.show(OrderViewComponent,  Object.assign({popupMiddleSize}, { class: 'modal-lg' }));
  }

}
