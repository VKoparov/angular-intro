import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClearAllCookiesComponent } from './clear-all-cookies.component';

describe('ClearAllCookiesComponent', () => {
  let component: ClearAllCookiesComponent;
  let fixture: ComponentFixture<ClearAllCookiesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ClearAllCookiesComponent]
    });
    fixture = TestBed.createComponent(ClearAllCookiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
