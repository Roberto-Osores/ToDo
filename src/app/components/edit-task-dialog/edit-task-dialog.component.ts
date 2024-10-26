import { ChangeDetectionStrategy, Component, Inject } from '@angular/core';
import { NgIf } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialogModule, MatDialogTitle, MatDialogActions, MatDialogContent } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';


@Component({
  selector: 'app-edit-task-dialog',
  standalone: true,
  imports: [NgIf,MatDialogModule, MatDialogTitle, MatDialogActions, MatFormFieldModule, MatDialogContent, ReactiveFormsModule, MatInputModule],
  templateUrl: './edit-task-dialog.component.html',
  styleUrl: './edit-task-dialog.component.css'
})
export class EditTaskDialogComponent {

  taskForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<EditTaskDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { titulo: string; descripcion: string }
  ) {
    this.taskForm = this.fb.group({
      titulo: [data.titulo, [Validators.required, Validators.maxLength(25)]],
      descripcion: [data.descripcion, [Validators.required, Validators.maxLength(25)]]
    });
  }

  onSubmit() {
    if (this.taskForm.valid) {
      this.dialogRef.close(this.taskForm.value); // Pass updated data back
    }
  }

}
