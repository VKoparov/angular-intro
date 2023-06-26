import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentInheritanceComponent } from './component-inheritance.component';

describe('ComponentInheritanceComponent', () => {
  let component: ComponentInheritanceComponent;
  let fixture: ComponentFixture<ComponentInheritanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComponentInheritanceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComponentInheritanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
