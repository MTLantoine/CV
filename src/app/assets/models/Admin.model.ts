import { Template } from ".";

export class Admin {
  constructor(public admins?: OneAdmin[]) {}
}

export class OneAdmin {
  constructor(
    public mail: string,
    public pwd: string,
    public content?: Template[]
  ) {}
}
