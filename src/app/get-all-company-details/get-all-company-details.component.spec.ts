import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetAllCompanyDetailsComponent } from './get-all-company-details.component';

describe('GetAllCompanyDetailsComponent', () => {
  let component: GetAllCompanyDetailsComponent;
  let fixture: ComponentFixture<GetAllCompanyDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetAllCompanyDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetAllCompanyDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
