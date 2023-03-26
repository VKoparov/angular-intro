import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoCodeViewModalComponent } from './demo-code-view-modal.component';

describe('DemoCodeViewModalComponent', () => {
  let component: DemoCodeViewModalComponent;
  let fixture: ComponentFixture<DemoCodeViewModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DemoCodeViewModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DemoCodeViewModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
