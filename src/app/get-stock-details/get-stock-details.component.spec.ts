import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetStockDetailsComponent } from './get-stock-details.component';

describe('GetStockDetailsComponent', () => {
  let component: GetStockDetailsComponent;
  let fixture: ComponentFixture<GetStockDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetStockDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetStockDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
