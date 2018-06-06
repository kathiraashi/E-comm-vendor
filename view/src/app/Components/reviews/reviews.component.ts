import { Component, OnInit } from '@angular/core';


import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { BsModalService } from 'ngx-bootstrap/modal';

import { ReviewsViewComponent } from '../Models/reviews-view/reviews-view.component';

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.css']
})
export class ReviewsComponent implements OnInit {

  bsModalRef: BsModalRef;
  Active_Tab = 'PromoCodes' ;
  constructor(private modalService: BsModalService) { }

  ngOnInit() {
  }

  ViewReview() {
    const popupMiddleSize = {
      title: 'Modal with component'
    };
    this.bsModalRef = this.modalService.show(ReviewsViewComponent,  Object.assign({popupMiddleSize}, { class: '' }));
  }

}
