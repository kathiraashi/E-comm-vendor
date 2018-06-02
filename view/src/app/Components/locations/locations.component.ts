import { Component, OnInit } from '@angular/core';

import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';

import { LocationCreateComponent  } from './../Models/location-create/location-create.component';

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

  createlocation() {
    const initialState = {
      title: 'Modal with component'
    };
    this.ModalRef = this.modalService.show(LocationCreateComponent, Object.assign({initialState}, { class: 'modal-lg' }));
  }
}


