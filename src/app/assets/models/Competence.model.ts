export class Competence {
  constructor(public title, public competence: OneCompetence[]) {}
}

export class OneCompetence {
  constructor(
    public name: string,
    public level: number,
    public color?: string
  ) {}
}
