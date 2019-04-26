import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-program-name-dialog',
  templateUrl: './program-name-dialog.component.html',
  styleUrls: ['./program-name-dialog.component.scss']
})
export class ProgramNameDialogComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<ProgramNameDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: string
  ) {}

  ngOnInit() {}

  close(): void {
    this.dialogRef.close();
  }
}
