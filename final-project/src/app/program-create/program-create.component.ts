import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProgramService } from '../services/program.service';
import { IProgram } from '../models/program';

@Component({
  selector: 'app-program-create',
  templateUrl: './program-create.component.html',
  styleUrls: ['./program-create.component.scss']
})
export class ProgramCreateComponent implements OnInit {
  title: string;
  programName: string;
  program: IProgram;

  constructor(
    private route: ActivatedRoute,
    private programService: ProgramService,
    private router: Router
  ) {
    this.title = 'Create Visual Program';
    this.route.params.subscribe(params => {
      this.programName = params['programName'];
      this.program = this.programService.getOne(this.programName);
      if (!this.program) {
        this.program = {
          name: this.programName,
          xmlData: null
        };
      }
      console.log(
        'creating/editing the program - ',
        JSON.stringify(this.program)
      );
    });
  }

  ngOnInit() {}

  saveProgram(): void {
    // TODO - get XML representation of the program

    console.log('saving the program - ', JSON.stringify(this.program));
    this.programService.upsertOne(this.program);
    this.router.navigate(['listProgram']);
  }
}
