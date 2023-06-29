import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClearCookieComponent } from './clear-cookie.component';

describe('ClearCookieComponent', () => {
  let component: ClearCookieComponent;
  let fixture: ComponentFixture<ClearCookieComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ClearCookieComponent]
    });
    fixture = TestBed.createComponent(ClearCookieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
