import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShouldCallbackComponent } from './should-callback.component';

describe('ShouldCallbackComponent', () => {
  let component: ShouldCallbackComponent;
  let fixture: ComponentFixture<ShouldCallbackComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShouldCallbackComponent]
    });
    fixture = TestBed.createComponent(ShouldCallbackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
