import { Picture } from ".";

export class Text {
  constructor(
    public title: string,
    public text: OneText[],
    public link?: string
  ) {}
}

export class OneText {
  constructor(public description: string, public img?: Picture) {}
}
