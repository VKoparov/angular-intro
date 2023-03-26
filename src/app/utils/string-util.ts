export const formatTextWithPlaceholders = <T>(
  text: string,
  ...values: T[]
): string => {
  values.forEach((value, index) => {
    text = (text as any).replaceAll(`{${index}}`, value);
  });
  return text;
};
