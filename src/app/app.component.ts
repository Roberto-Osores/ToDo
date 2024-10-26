import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HttpClient} from '@angular/common/http';
import { TaskItemComponent } from "./components/task-item/task-item.component";
import { NgFor } from '@angular/common';
import {ChangeDetectionStrategy, inject} from '@angular/core';
import { ChangeDetectorRef } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {
  MatDialog,
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogTitle,
} from '@angular/material/dialog';
import { NewTaskDialogComponent } from './components/new-task-dialog/new-task-dialog.component';
import { ApiServiceService } from './services/api-service.service';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TaskItemComponent, NgFor, MatButtonModule],changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ToDo';
  data: any[] = [];
  
  constructor(private apiService: ApiServiceService, private cdr: ChangeDetectorRef, private dialog: MatDialog) {}
  

  openDialog(): void {
    const dialogRef = this.dialog.open(NewTaskDialogComponent);

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.loadData();
        
      }
    });
  }

  ngOnInit(): void {
    
    this.loadData();

  }

  private isOlderThan24Hours(createdAt: string): boolean {
    const creationDate = new Date(createdAt);
    const currentDate = new Date();
    const timeDifference = currentDate.getTime() - creationDate.getTime();
    return timeDifference >= 24 * 60 * 60 * 1000; // 24 hours in milliseconds
  }

    // LLAMADO A LA API
    loadData(): void {
      console.log("Loading data...");
      this.apiService.getTasks().subscribe(tasks => {
        this.data = tasks.map((task: { id: number; createdAt: string; titulo: string; descripcion: string; estado: boolean; icono: string }) => {
          let backgroundColor = 'white'; // default color
    
          if (task.estado) {
            backgroundColor = '#ADF7B699';
          } else if (this.isOlderThan24Hours(task.createdAt)) {
            backgroundColor = '#FFC09F99';
          } else {
            backgroundColor = '#FFEE9399';
          }
    
          return {
            id: task.id,
            titulo: task.titulo,
            descripcion: task.descripcion,
            icono: task.icono,
            backgroundColor
          };
        });
        this.cdr.detectChanges(); // Trigger change detection after updating data
      });
    }

}
