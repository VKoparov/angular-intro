import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StubComponent } from './stub.component';

describe('StubComponent', () => {
  let component: StubComponent;
  let fixture: ComponentFixture<StubComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StubComponent]
    });
    fixture = TestBed.createComponent(StubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
