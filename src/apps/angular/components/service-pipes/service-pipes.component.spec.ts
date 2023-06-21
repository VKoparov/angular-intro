import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicePipesComponent } from './service-pipes.component';

describe('ServicePipesComponent', () => {
  let component: ServicePipesComponent;
  let fixture: ComponentFixture<ServicePipesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServicePipesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServicePipesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
