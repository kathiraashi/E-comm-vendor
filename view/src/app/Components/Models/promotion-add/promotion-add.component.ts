import { Component, OnInit } from '@angular/core';

import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { BsModalService } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-promotion-add',
  templateUrl: './promotion-add.component.html',
  styleUrls: ['./promotion-add.component.css']
})
export class PromotionAddComponent implements OnInit {

  DiscountType = '0';

  constructor(public bsModalRef: BsModalRef) { }

  ngOnInit() {
  }

  DiscountTypeChange(value) {
    this.DiscountType = value;
  }
}
