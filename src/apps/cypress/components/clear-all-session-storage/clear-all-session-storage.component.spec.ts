import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClearAllSessionStorageComponent } from './clear-all-session-storage.component';

describe('ClearAllSessionStorageComponent', () => {
  let component: ClearAllSessionStorageComponent;
  let fixture: ComponentFixture<ClearAllSessionStorageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ClearAllSessionStorageComponent]
    });
    fixture = TestBed.createComponent(ClearAllSessionStorageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
