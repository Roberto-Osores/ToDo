import { Component, Input, Output, EventEmitter } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';
import { ApiServiceService } from '../../services/api-service.service';

@Component({
  selector: 'app-task-item',
  standalone: true,
  imports: [MatMenuModule, MatIconModule, MatButtonModule],
  templateUrl: './task-item.component.html',
  styleUrl: './task-item.component.css'
})
export class TaskItemComponent {

  @Input() id!: number;
  @Input() titulo: string = '';
  @Input() descripcion: string = '';
  @Input() backgroundColor: string = '';
  @Input() icono: string = '';

  @Output() taskUpdated = new EventEmitter<void>();

  constructor(private apiService: ApiServiceService) {}

  markAsCompleted() {
    this.apiService.markTaskAsCompleted(this.id).subscribe({
      next: () => {
        this.taskUpdated.emit(); // Notify parent component to refresh list
      },
      error: (error) => console.error("Error marking task as completed:", error),
    });
  }
}
