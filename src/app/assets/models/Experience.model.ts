export class Experience {
  constructor(public title: string, public experience: OneExperience[]) {}
}

export class OneExperience {
  constructor(
    public date: Date,
    public title: string,
    public description?: string,
    public subtitle?: string
  ) {}
}

export class Date {
  constructor(public year: string, public date?: string) {}
}
