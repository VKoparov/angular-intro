import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetAllLocalStorageComponent } from './get-all-local-storage.component';

describe('GetAllLocalStorageComponent', () => {
  let component: GetAllLocalStorageComponent;
  let fixture: ComponentFixture<GetAllLocalStorageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GetAllLocalStorageComponent]
    });
    fixture = TestBed.createComponent(GetAllLocalStorageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
