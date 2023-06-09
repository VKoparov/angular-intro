import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LazyExampleComponent } from './lazy-example.component';

describe('LazyExampleComponent', () => {
  let component: LazyExampleComponent;
  let fixture: ComponentFixture<LazyExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LazyExampleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LazyExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
