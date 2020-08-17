import { TestBed } from '@angular/core/testing';

import { OrderInformationServiceService } from './order-information-service.service';

describe('OrderInformationServiceService', () => {
  let service: OrderInformationServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OrderInformationServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
