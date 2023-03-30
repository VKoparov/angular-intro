import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectiveEventComponent } from './directive-event.component';

describe('DirectiveEventComponent', () => {
  let component: DirectiveEventComponent;
  let fixture: ComponentFixture<DirectiveEventComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DirectiveEventComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DirectiveEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
