export const getCurrentDateFormatted = (): string => {
  const date = new Date().toLocaleString().replace(',', '');
  return date.substring(0, date.lastIndexOf(':'));
};
