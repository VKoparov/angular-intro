import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpectComponent } from './expect.component';

describe('ExpectComponent', () => {
  let component: ExpectComponent;
  let fixture: ComponentFixture<ExpectComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ExpectComponent]
    });
    fixture = TestBed.createComponent(ExpectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
