import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StandardpageComponent } from './standardpage.component';

describe('StandardpageComponent', () => {
  let component: StandardpageComponent;
  let fixture: ComponentFixture<StandardpageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StandardpageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StandardpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
