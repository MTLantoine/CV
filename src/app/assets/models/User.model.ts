import { Picture } from ".";

export class User {
  constructor(
    public firstName: string,
    public lastName: string,
    public age: number,
    public picture?: Picture,
    public easterEgg?: Picture
  ) {}
}
