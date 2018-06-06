import { Component, OnInit } from '@angular/core';

import {FormGroup, FormControl, FormBuilder} from '@angular/forms';


import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { BsModalService } from 'ngx-bootstrap/modal';

import { PromotionsViewComponent } from '../Models/promotions-view/promotions-view.component';
import { PromotionAddComponent } from '../Models/promotion-add/promotion-add.component';
import { PromotionEditComponent } from '../Models/promotion-edit/promotion-edit.component';

import { DeleteConfirmationComponent } from './../Models/delete-confirmation/delete-confirmation.component';

@Component({
  selector: 'app-promotions',
  templateUrl: './promotions.component.html',
  styleUrls: ['./promotions.component.css']
})
export class PromotionsComponent implements OnInit {

  bsModalRef: BsModalRef;
  Active_Tab = 'PromoCodes' ;
  constructor(private modalService: BsModalService) { }

  ngOnInit() {
  }
  Active_Tab_Change(name) {
    this.Active_Tab = name;
  }
  PromotionAdd() {
    const popupMiddleSize = {
      title: 'Modal with component'
    };
    this.bsModalRef = this.modalService.show(PromotionAddComponent,  Object.assign({popupMiddleSize}, { class: 'modal-lg' }));
  }
  PromotionEdit() {
    const popupMiddleSize = {
      title: 'Modal with component'
    };
    this.bsModalRef = this.modalService.show(PromotionEditComponent,  Object.assign({popupMiddleSize}, { class: 'modal-lg' }));
  }
  ViewPromotion() {
    const popupMiddleSize = {
      title: 'Modal with component'
    };
    this.bsModalRef = this.modalService.show(PromotionsViewComponent,  Object.assign({popupMiddleSize}, { class: '' }));
  }

  DeletePromotion() {
    const initialState = {
      title: 'Modal with component'
    };
    this.bsModalRef = this.modalService.show(DeleteConfirmationComponent, Object.assign({initialState}, { class: 'modal-sm' }));
  }

}
