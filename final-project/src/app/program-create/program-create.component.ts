import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProgramService } from '../services/program.service';
import { IProgram } from '../models/program';

declare var Blockly: any;

@Component({
  selector: 'app-program-create',
  templateUrl: './program-create.component.html',
  styleUrls: ['./program-create.component.scss']
})
export class ProgramCreateComponent implements OnInit {
  title: string;
  programName: string;
  program: IProgram;
  workspace: any;

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

  ngOnInit() {
    this.workspace = Blockly.inject('blocklyDiv', {
      toolbox: document.getElementById('toolbox'),
      scrollbars: false
    });

    if (this.program.xmlData) {
      this.workspace.clear();
      Blockly.Xml.domToWorkspace(
        Blockly.Xml.textToDom(this.program.xmlData),
        this.workspace
      );
    }
  }

  saveProgram(): void {
    this.program.xmlData = Blockly.Xml.domToText(
      Blockly.Xml.workspaceToDom(this.workspace)
    );
    console.log('saving the program - ', JSON.stringify(this.program));
    this.programService.upsertOne(this.program);
    this.router.navigate(['listProgram']);
  }
}
