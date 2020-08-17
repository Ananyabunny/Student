import { TestBed } from '@angular/core/testing';

import { CartInformationServiceService } from './cart-information-service.service';

describe('CartInformationServiceService', () => {
  let service: CartInformationServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CartInformationServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
