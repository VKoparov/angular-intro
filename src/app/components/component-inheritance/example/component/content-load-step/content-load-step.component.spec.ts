import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentLoadStepComponent } from './content-load-step.component';

describe('ContentLoadStepComponent', () => {
  let component: ContentLoadStepComponent;
  let fixture: ComponentFixture<ContentLoadStepComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContentLoadStepComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContentLoadStepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
