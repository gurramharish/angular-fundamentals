import { TestBed } from '@angular/core/testing';

import { ContactDetailGuard } from './contact-detail.guard';

describe('ContactDetailGuard', () => {
  let guard: ContactDetailGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(ContactDetailGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
