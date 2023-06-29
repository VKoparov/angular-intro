import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClearLocalStorageComponent } from './clear-local-storage.component';

describe('ClearLocalStorageComponent', () => {
  let component: ClearLocalStorageComponent;
  let fixture: ComponentFixture<ClearLocalStorageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ClearLocalStorageComponent]
    });
    fixture = TestBed.createComponent(ClearLocalStorageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
