import { formatTextWithPlaceholders } from './string-util';

describe('string-utils', () => {
  it('should replace a place holder', () => {
    const textWithPlaceholders = 'Hello {0} {1}';
    const formattedText = formatTextWithPlaceholders(
      textWithPlaceholders,
      'First',
      'Last'
    );

    expect(formattedText).toEqual('Hello First Last');
  });

  it('should replace a repetitive place holder', () => {
    const textWithPlaceholders = 'Hello {0} {1} {0}';
    const formattedText = formatTextWithPlaceholders(
      textWithPlaceholders,
      'First',
      'Last'
    );

    expect(formattedText).toEqual('Hello First Last First');
  });

  it('should replace with 4 values', () => {
    const textWithPlaceholders = 'Hello {0} {1} {2} {3}';
    const formattedText = formatTextWithPlaceholders(
      textWithPlaceholders,
      'First',
      'Last',
      'Next',
      'Some'
    );

    expect(formattedText).toEqual('Hello First Last Next Some');
  });
});
