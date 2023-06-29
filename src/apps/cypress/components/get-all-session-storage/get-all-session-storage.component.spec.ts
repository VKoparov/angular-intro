import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetAllSessionStorageComponent } from './get-all-session-storage.component';

describe('GetAllSessionStorageComponent', () => {
  let component: GetAllSessionStorageComponent;
  let fixture: ComponentFixture<GetAllSessionStorageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GetAllSessionStorageComponent]
    });
    fixture = TestBed.createComponent(GetAllSessionStorageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
