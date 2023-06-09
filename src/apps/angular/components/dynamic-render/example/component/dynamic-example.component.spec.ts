import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicExampleComponent } from './dynamic-example.component';

describe('ExampleComponent', () => {
  let component: DynamicExampleComponent;
  let fixture: ComponentFixture<DynamicExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DynamicExampleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DynamicExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
