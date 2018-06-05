import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PromotionsModelComponent } from './promotions-model.component';

describe('PromotionsModelComponent', () => {
  let component: PromotionsModelComponent;
  let fixture: ComponentFixture<PromotionsModelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PromotionsModelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PromotionsModelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
