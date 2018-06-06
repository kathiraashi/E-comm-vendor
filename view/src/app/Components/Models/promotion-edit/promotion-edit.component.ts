import { Component, OnInit } from '@angular/core';

import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { BsModalService } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-promotion-edit',
  templateUrl: './promotion-edit.component.html',
  styleUrls: ['./promotion-edit.component.css']
})
export class PromotionEditComponent implements OnInit {

  DiscountType = '0';

  constructor(public bsModalRef: BsModalRef) { }

  ngOnInit() {
  }

  DiscountTypeChange(value) {
    this.DiscountType = value;
  }

}
