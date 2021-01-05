import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactCountComponent } from './contact-count.component';

describe('ContactCountComponent', () => {
  let component: ContactCountComponent;
  let fixture: ComponentFixture<ContactCountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContactCountComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactCountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
