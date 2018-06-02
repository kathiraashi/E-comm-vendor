import { Component, OnInit } from '@angular/core';

import {FormGroup, FormControl, FormBuilder} from '@angular/forms';


import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';

import { BsModalService } from 'ngx-bootstrap/modal';
import { PromotionsViewComponent } from '../Models/promotions-view/promotions-view.component';
@Component({
  selector: 'app-promotions',
  templateUrl: './promotions.component.html',
  styleUrls: ['./promotions.component.css']
})
export class PromotionsComponent implements OnInit {

  bsModalRef: BsModalRef;
  Active_Tab = 'dashboard' ;
  constructor(private modalService: BsModalService) { }

  ngOnInit() {
  }
  Active_Tab_Change(name) {
    this.Active_Tab = name;
  }
  ViewPromotion() {
    const popupMiddleSize = {
      title: 'Modal with component'
    };
    this.bsModalRef = this.modalService.show(PromotionsViewComponent,  Object.assign({popupMiddleSize}, { class: 'modal-lg' }));
  }

}
