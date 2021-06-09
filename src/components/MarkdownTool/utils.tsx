export const fontBlod = (text: string, start: number, end: number): string => {
  const searchText = text.substring(start, end);
  return text.replace(searchText, `**${searchText}**`);
};
