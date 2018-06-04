import { Component, OnInit } from '@angular/core';

import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
@Component({
  selector: 'app-promotions-model',
  templateUrl: './promotions-model.component.html',
  styleUrls: ['./promotions-model.component.css']
})
export class PromotionsModelComponent implements OnInit {
title: String;
  constructor(public bsModalRef: BsModalRef) { }

  ngOnInit() {
  }

}
