import { Component, OnInit } from '@angular/core';

import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';

@Component({
  selector: 'app-food-item-add',
  templateUrl: './food-item-add.component.html',
  styleUrls: ['./food-item-add.component.css']
})
export class FoodItemAddComponent implements OnInit {

  title: String;
  constructor(public bsModalRef: BsModalRef) {}

  ngOnInit() {
  }

}
