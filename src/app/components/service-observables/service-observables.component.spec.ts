import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceObservablesComponent } from './service-observables.component';

describe('ServiceObservablesComponent', () => {
  let component: ServiceObservablesComponent;
  let fixture: ComponentFixture<ServiceObservablesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServiceObservablesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServiceObservablesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
