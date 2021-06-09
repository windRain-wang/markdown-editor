export interface ControlTypes {
  markdownValue: string;
  htmlMarkdownStr: string;
  historyValus?: string[];
  setMarkdownValue: (v: string) => void;
  // selectionPosition: number[];
  getSelectionPosition: () => Array<number>;
}
