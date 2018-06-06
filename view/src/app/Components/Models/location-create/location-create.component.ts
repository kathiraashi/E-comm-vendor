import { Component, OnInit } from '@angular/core';

import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';

@Component({
  selector: 'app-location-create',
  templateUrl: './location-create.component.html',
  styleUrls: ['./location-create.component.css']
})
export class LocationCreateComponent implements OnInit {

  lat = 36.73252872710401;
  lng = -119.79924472212213;

  constructor( public bsModalRef: BsModalRef) { }

  ngOnInit() {
  }

}
