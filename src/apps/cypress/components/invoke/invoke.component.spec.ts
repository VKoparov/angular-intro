import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvokeComponent } from './invoke.component';

describe('InvokeComponent', () => {
  let component: InvokeComponent;
  let fixture: ComponentFixture<InvokeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InvokeComponent]
    });
    fixture = TestBed.createComponent(InvokeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
