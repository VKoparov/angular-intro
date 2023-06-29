import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShouldComponent } from './should.component';

describe('ShouldComponent', () => {
  let component: ShouldComponent;
  let fixture: ComponentFixture<ShouldComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShouldComponent]
    });
    fixture = TestBed.createComponent(ShouldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
