import {ChangeDetectionStrategy, Component, inject} from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import {
  MatDialog,
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogTitle,
} from '@angular/material/dialog';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { NgIf, NgForOf } from '@angular/common';
import { ApiServiceService } from '../../services/api-service.service';

/** @title Simple form field */
@Component({
  selector: 'new-task-dialog.component',
  templateUrl: 'new-task-dialog.component.html',
  styleUrl: 'new-task-dialog.component.css',
  standalone: true,
  imports: [NgForOf, NgIf, ReactiveFormsModule, MatDialogModule, MatDialogTitle, MatDialogContent, MatDialogActions, MatDialogClose, MatFormFieldModule, MatInputModule, MatSelectModule, MatButtonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NewTaskDialogComponent {

  taskForm: FormGroup;
  emojiOptions: string[] = ['😀', '📚', '🏃', '🏠', '🍔', '🛒', '🐶', '👨‍👩‍👧', '💼', '✈️'];
  
  private apiService = inject(ApiServiceService);

  constructor(private dialogRef: MatDialogRef<NewTaskDialogComponent>, private fb: FormBuilder) {
    this.taskForm = this.fb.group({
      titulo: ['', [Validators.required, Validators.maxLength(25)]],
      icono: ['', Validators.required],
      descripcion: ['', [Validators.required, Validators.maxLength(25)]]
    });
  }

  onSubmit() {
    if (this.taskForm.valid) {
      this.apiService.postTask(this.taskForm.value).subscribe({
        next: (response) => {
          console.log("Task created:", response);
          this.dialogRef.close(response); // Close the dialog and pass the response back
        },
        error: (error) => {
          console.error("Error creating task:", error);
        },
      });
    }
  }

}

