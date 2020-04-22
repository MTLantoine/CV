import { Picture } from "./Picture.model";

export class User {
  constructor(
    public firstName: string,
    public lastName: string,
    public age: number,
    public picture?: Picture
  ) {}
}
