import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LazyLoadingComponent } from './lazy-loading.component';

describe('LazyComponent', () => {
  let component: LazyLoadingComponent;
  let fixture: ComponentFixture<LazyLoadingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LazyLoadingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LazyLoadingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});