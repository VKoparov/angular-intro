import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DblclickComponent } from './dblclick.component';

describe('DblclickComponent', () => {
  let component: DblclickComponent;
  let fixture: ComponentFixture<DblclickComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DblclickComponent]
    });
    fixture = TestBed.createComponent(DblclickComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
