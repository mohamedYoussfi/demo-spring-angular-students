import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoadPaymentsComponent } from './load-payments.component';

describe('LoadPaymentsComponent', () => {
  let component: LoadPaymentsComponent;
  let fixture: ComponentFixture<LoadPaymentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LoadPaymentsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LoadPaymentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
