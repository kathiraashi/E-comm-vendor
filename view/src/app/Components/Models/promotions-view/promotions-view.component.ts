import { Component, OnInit } from '@angular/core';


import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';

import { BsModalService } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-promotions-view',
  templateUrl: './promotions-view.component.html',
  styleUrls: ['./promotions-view.component.css']
})
export class PromotionsViewComponent implements OnInit {

  constructor(public bsModalRef: BsModalRef) { }

  ngOnInit() {
  }

}
