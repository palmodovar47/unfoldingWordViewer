export class Tag {
  ufsmTag: string;
  text: string;
  number: string;

  constructor(
    ufsmTag: string,
    number: string,
    text: string
  ) {
    this.ufsmTag = ufsmTag;
    this.text = text;
    this.number = number;
  }
}
