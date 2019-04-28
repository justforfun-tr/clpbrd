import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';



export interface DialogData {
  animal: string;
  name: string;
}

@Component({
    selector: 'add-new-dialog',
    templateUrl: 'add-new-dialog.html',
  })
export class AddNewDialog{
  constructor(
    public dialogRef: MatDialogRef<AddNewDialog>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}