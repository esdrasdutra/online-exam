export class Exam {
  constructor(
    public title: string,
    public description: string,
    public long_description:string,
    public id: number,
    public updatedAt?: Date,
    public createdAt?: Date,
    public lastUpdatedBy?: string,
  ) { }
}

export class ExamDTO {
  constructor(
    public title: string,
    public description: string,
    public long_description:string,
  ) { }
}
