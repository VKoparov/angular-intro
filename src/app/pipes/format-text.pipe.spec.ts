import { FormatTextPipe } from './format-text.pipe';

describe('FormatTextPipe', () => {
  const pipe: FormatTextPipe = new FormatTextPipe()
  beforeEach(() => {
  });
  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });
  it('should format-text-with-placeholder', () => {
    const text = 'Hello {0} {1}';
    const result = pipe.transform(text, 'First', 'Last');
    expect(result).toEqual('Hello First Last');
  });
});
