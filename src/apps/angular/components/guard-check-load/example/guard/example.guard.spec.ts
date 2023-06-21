import { TestBed } from '@angular/core/testing';
import { ExampleGuard } from './example.guard';

describe('ExampleGuard', () => {
  let guard: ExampleGuard;

  beforeEach(() => {
    guard = TestBed.inject(ExampleGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
