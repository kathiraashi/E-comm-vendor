import { Component, OnInit } from '@angular/core';

import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';

import { LocationCreateComponent  } from './../Models/location-create/location-create.component';

import { DeleteConfirmationComponent } from './../Models/delete-confirmation/delete-confirmation.component';

@Component({
  selector: 'app-locations',
  templateUrl: './locations.component.html',
  styleUrls: ['./locations.component.css']
})
export class LocationsComponent implements OnInit {

  ModalRef: BsModalRef;

  constructor(private modalService: BsModalService) { }

  ngOnInit() {
  }

  CreateLocation() {
    const initialState = {
      title: 'Modal with component'
    };
    this.ModalRef = this.modalService.show(LocationCreateComponent, Object.assign({initialState}, { class: 'modal-lg' }));
  }

  DeleteLocation() {
    const initialState = {
      title: 'Modal with component'
    };
    this.ModalRef = this.modalService.show(DeleteConfirmationComponent, Object.assign({initialState}, { class: 'modal-sm' }));
  }

}


