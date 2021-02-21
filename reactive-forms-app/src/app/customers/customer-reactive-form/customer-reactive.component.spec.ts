import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerReactiveComponent } from './customer-reactive.component';

describe('CustomerComponent', () => {
  let component: CustomerReactiveComponent;
  let fixture: ComponentFixture<CustomerReactiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomerReactiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerReactiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
});
