import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EagerExampleComponent } from './eager-example.component';

describe('EagerExampleComponent', () => {
  let component: EagerExampleComponent;
  let fixture: ComponentFixture<EagerExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EagerExampleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EagerExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
