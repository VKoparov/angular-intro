import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InterceptComponent } from './intercept.component';

describe('InterceptComponent', () => {
  let component: InterceptComponent;
  let fixture: ComponentFixture<InterceptComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InterceptComponent]
    });
    fixture = TestBed.createComponent(InterceptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
