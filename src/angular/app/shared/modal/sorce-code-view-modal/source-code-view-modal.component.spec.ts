import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SourceCodeViewModalComponent } from './source-code-view-modal.component';

describe('ModalComponent', () => {
  let component: SourceCodeViewModalComponent;
  let fixture: ComponentFixture<SourceCodeViewModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SourceCodeViewModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SourceCodeViewModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
