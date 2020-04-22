export class Passion {
  constructor(public title: string, public passion: OnePassion[]) {}
}

export class OnePassion {
  constructor(public title: string, public example?: string[]) {}
}
