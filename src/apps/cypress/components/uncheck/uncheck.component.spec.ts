import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UncheckComponent } from './uncheck.component';

describe('UncheckComponent', () => {
  let component: UncheckComponent;
  let fixture: ComponentFixture<UncheckComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UncheckComponent]
    });
    fixture = TestBed.createComponent(UncheckComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
