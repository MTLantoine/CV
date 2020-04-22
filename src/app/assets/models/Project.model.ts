import { Picture } from "./Picture.model";

export class Project {
  constructor(public title: string, public project: OneProject[]) {}
}

export class OneProject {
  constructor(
    public path: string,
    public title: string,
    public picture?: Picture
  ) {}
}
