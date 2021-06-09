export type tool = {
  name: string;
  handleEvent: () => void;
};

export enum FontEnum {
  blod,
  italic,
  del
}

export enum HeadLineEnum {
  h1 = 1,
  h2,
  h3,
  h4,
  h5,
  h6
}
