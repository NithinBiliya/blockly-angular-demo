import { Injectable } from '@angular/core';
import { IProgram } from '../models/program';

@Injectable({
  providedIn: 'root'
})
export class ProgramService {
  programList: IProgram[];

  constructor() {
    this.programList = [];
  }

  getAll(): IProgram[] {
    return this.programList;
  }

  getOne(name: string): IProgram {
    return this.programList.find((program: IProgram) => {
      return program.name === name;
    });
  }

  upsertOne(program: IProgram): void {
    const tmp: IProgram = this.getOne(program.name);
    if (tmp) {
      tmp.xmlData = program.xmlData;
    } else {
      this.programList.push(program);
    }
  }
}
