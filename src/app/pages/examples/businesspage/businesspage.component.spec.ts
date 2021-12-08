import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BusinesspageComponent } from './businesspage.component';

describe('BusinesspageComponent', () => {
  let component: BusinesspageComponent;
  let fixture: ComponentFixture<BusinesspageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BusinesspageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BusinesspageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
