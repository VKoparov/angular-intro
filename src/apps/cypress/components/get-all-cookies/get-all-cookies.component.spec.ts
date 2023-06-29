import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetAllCookiesComponent } from './get-all-cookies.component';

describe('GetAllCookiesComponent', () => {
  let component: GetAllCookiesComponent;
  let fixture: ComponentFixture<GetAllCookiesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GetAllCookiesComponent]
    });
    fixture = TestBed.createComponent(GetAllCookiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
