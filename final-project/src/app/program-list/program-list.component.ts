import { Component, OnInit, ViewChild } from '@angular/core';
import { IProgram } from '../models/program';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { ProgramService } from '../services/program.service';
import { MatDialog } from '@angular/material/dialog';
import { ProgramNameDialogComponent } from '../program-name-dialog/program-name-dialog.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-program-list',
  templateUrl: './program-list.component.html',
  styleUrls: ['./program-list.component.scss']
})
export class ProgramListComponent implements OnInit {
  pageTitle: string;

  // parameters for the table
  displayedColumns: string[];
  dataSource: MatTableDataSource<IProgram>;
  pageSizeOptions: number[];
  pageSize: number;
  @ViewChild(MatPaginator)
  set paginator(v: MatPaginator) {
    if (this.dataSource) {
      this.dataSource.paginator = v;
    }
  }
  @ViewChild(MatSort)
  set sort(v: MatSort) {
    if (this.dataSource) {
      this.dataSource.sort = v;
    }
  }

  constructor(
    private programService: ProgramService,
    public dialog: MatDialog,
    private router: Router
  ) {
    this.pageTitle = 'Program List';
    this.displayedColumns = ['programName', 'actions'];
    this.pageSizeOptions = [5, 10, 25, 100];
    this.pageSize = 10;
  }

  ngOnInit() {
    this.resetTableData(this.programService.getAll());
  }

  /* Edit program */
  editProgram(program: IProgram): void {
    this.router.navigate(['createProgram', { programName: program.name }]);
  }

  /* reset the table values */
  resetTableData(programList: IProgram[]): void {
    this.dataSource = new MatTableDataSource(programList);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  createNewProgram(): void {
    const dialogRef = this.dialog.open(ProgramNameDialogComponent, {
      width: '250px',
      data: {}
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        console.log('create program with name - ', result);
        this.router.navigate(['createProgram', { programName: result }]);
      }
    });
  }
}
