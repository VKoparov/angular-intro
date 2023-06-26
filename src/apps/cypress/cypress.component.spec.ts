import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CypressComponent } from './cypress.component';

describe('HomeComponent', () => {
  let component: CypressComponent;
  let fixture: ComponentFixture<CypressComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CypressComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CypressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
