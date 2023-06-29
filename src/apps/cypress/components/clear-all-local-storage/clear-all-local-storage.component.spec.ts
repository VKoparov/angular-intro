import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClearAllLocalStorageComponent } from './clear-all-local-storage.component';

describe('ClearAllLocalStorageComponent', () => {
  let component: ClearAllLocalStorageComponent;
  let fixture: ComponentFixture<ClearAllLocalStorageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ClearAllLocalStorageComponent]
    });
    fixture = TestBed.createComponent(ClearAllLocalStorageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
