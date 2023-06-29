import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpyComponent } from './spy.component';

describe('SpyComponent', () => {
  let component: SpyComponent;
  let fixture: ComponentFixture<SpyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SpyComponent]
    });
    fixture = TestBed.createComponent(SpyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
