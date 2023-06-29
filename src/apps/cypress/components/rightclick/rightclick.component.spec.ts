import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RightclickComponent } from './rightclick.component';

describe('RightclickComponent', () => {
  let component: RightclickComponent;
  let fixture: ComponentFixture<RightclickComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RightclickComponent]
    });
    fixture = TestBed.createComponent(RightclickComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
