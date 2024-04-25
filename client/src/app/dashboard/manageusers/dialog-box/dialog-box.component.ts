import { Component, Inject, Optional } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { errorMessages, regExps } from '../../../utils/form-validator.service';

export interface UsersData {
  email: string;
  id: number;
}

@Component({
  selector: 'app-dialog-box',
  templateUrl: './dialog-box.component.html',
  styleUrls: ['./dialog-box.component.scss']
})
export class DialogBoxComponent {

  action: string;
  local_data: any;
  cancel: string = 'Cancel';

  tableForm!: FormGroup;
  errors = errorMessages;
  roles: string[] = ['Admin', 'User'];


  constructor(
    public dialogRef: MatDialogRef<DialogBoxComponent>,
    @Optional() @Inject(MAT_DIALOG_DATA) public data: UsersData,
    private formBuilder: FormBuilder,) {
    this.local_data = { ...data };
    this.action = this.local_data.action;
    this.creatForm();
    this.tableForm.patchValue(this.local_data);
  }

  creatForm(): void {
    this.tableForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.pattern(regExps['email'])]],
    });
  }

  closeDialog() {
    this.dialogRef.close({ data: { action: 'Cancel' } });
  }

  onNext(): void {
    // Add your logic to handle the next button
  }

  onSubmit(): void {
    this.dialogRef.close({ data: { action: this.action, data: this.tableForm.value } });
  }
}