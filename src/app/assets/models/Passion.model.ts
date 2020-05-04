import { Picture } from ".";

export class Passion {
  constructor(public title: string, public passion: OnePassion[]) {}
}

export class OnePassion {
  constructor(public title: string, public example?: OneExample[]) {}
}

export class OneExample {
  constructor(public title: string, public picto?: Picture) {}
}
