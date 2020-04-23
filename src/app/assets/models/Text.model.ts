import { Picture } from "./Picture.model";

export class Text {
  constructor(public title: string, public text: OneText[]) {}
}

export class OneText {
  constructor(public description: string, public img?: Picture) {}
}
