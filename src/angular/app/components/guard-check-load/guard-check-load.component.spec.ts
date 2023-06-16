import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuardCheckLoadComponent } from './guard-check-load.component';

describe('GuardCheckLoadComponent', () => {
  let component: GuardCheckLoadComponent;
  let fixture: ComponentFixture<GuardCheckLoadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GuardCheckLoadComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GuardCheckLoadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
