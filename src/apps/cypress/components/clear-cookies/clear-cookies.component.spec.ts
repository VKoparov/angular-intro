import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClearCookiesComponent } from './clear-cookies.component';

describe('ClearCookiesComponent', () => {
  let component: ClearCookiesComponent;
  let fixture: ComponentFixture<ClearCookiesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ClearCookiesComponent]
    });
    fixture = TestBed.createComponent(ClearCookiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
