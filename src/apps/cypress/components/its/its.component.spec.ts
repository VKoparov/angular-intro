import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItsComponent } from './its.component';

describe('ItsComponent', () => {
  let component: ItsComponent;
  let fixture: ComponentFixture<ItsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ItsComponent]
    });
    fixture = TestBed.createComponent(ItsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
