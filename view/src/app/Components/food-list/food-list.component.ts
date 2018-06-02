import { Component, OnInit } from '@angular/core';

import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';

import { FoodItemAddComponent } from './../Models/food-item-add/food-item-add.component';
import { FoodItemEditComponent } from './../Models/food-item-edit/food-item-edit.component';
@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.css']
})
export class FoodListComponent implements OnInit {

  bsModalRef: BsModalRef;
  Active_Tab = 'Category_1' ;

  constructor(private modalService: BsModalService) { }

  ngOnInit() {
  }

  Active_Tab_Change(name) {
    this.Active_Tab = name;
  }
  AddFoodItem() {
    const initialState = {
      title: 'Modal with component'
    };
    this.bsModalRef = this.modalService.show(FoodItemAddComponent, {initialState});
  }
  EditFoodItem() {
    const initialState = {
      title: 'Modal with component'
    };
    this.bsModalRef = this.modalService.show(FoodItemEditComponent,  Object.assign({initialState}, { class: 'modal-lg' }));
  }


}
