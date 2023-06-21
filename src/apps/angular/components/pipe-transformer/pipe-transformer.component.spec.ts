import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PipeTransformerComponent } from './pipe-transformer.component';

describe('PipeTransformerComponent', () => {
  let component: PipeTransformerComponent;
  let fixture: ComponentFixture<PipeTransformerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PipeTransformerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PipeTransformerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
