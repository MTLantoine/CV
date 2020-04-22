import { Picture } from "./Picture.model";

export class Contact {
  constructor(
    public address: string,
    public cp: string,
    public city: string,
    public tel: string,
    public mail: string,
    public license: License[]
  ) {}
}

export class License {
  constructor(public name: string, public picto?: Picture) {}
}
