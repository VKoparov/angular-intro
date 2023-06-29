import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetCookiesComponent } from './get-cookies.component';

describe('GetCookiesComponent', () => {
  let component: GetCookiesComponent;
  let fixture: ComponentFixture<GetCookiesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GetCookiesComponent]
    });
    fixture = TestBed.createComponent(GetCookiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
