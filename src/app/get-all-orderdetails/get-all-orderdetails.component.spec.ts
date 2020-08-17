import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetAllOrderdetailsComponent } from './get-all-orderdetails.component';

describe('GetAllOrderdetailsComponent', () => {
  let component: GetAllOrderdetailsComponent;
  let fixture: ComponentFixture<GetAllOrderdetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetAllOrderdetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetAllOrderdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
