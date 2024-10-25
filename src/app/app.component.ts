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
  
  constructor(private apiService: ApiServiceService, private cdr: ChangeDetectorRef) {}
  readonly dialog = inject(MatDialog);

  openDialog() {
    this.dialog.open(NewTaskDialogComponent);
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
      this.apiService.getTasks().subscribe(tasks => {
        this.data = tasks.map((task: { createdAt: string; titulo: string; descripcion: string }) => ({
          titulo: task.titulo,
          descripcion: task.descripcion,
          backgroundColor: this.isOlderThan24Hours(task.createdAt) ? 'red' : 'white'
        }));
        this.cdr.detectChanges(); // Manually trigger change detection
      });
    }


  items = [
    { 
      titulo: 'Lecturas OK', 
      descripcion: 'Descripcion basica', 
      backgroundColor: '#FFEE93',
       
    },
    { 
      titulo: 'Alertas medias', 
      descripcion: 'Descripcion basica', 
      backgroundColor: '#FFC09F', 
      
    },
    { 
      titulo: 'Alertas rojas', 
      descripcion: 'Descripcion basica', 
      backgroundColor: '#FCF5C7', 
       
    },
    { 
      titulo: 'Sensores deshabilitados', 
      descripcion: 'Descripcion basica', 
      backgroundColor: '#FCF5C7', 
      
    },{ 
      titulo: 'Lecturas OK', 
      descripcion: 'Descripcion basica', 
      backgroundColor: '#FFEE93',
       
    },
    { 
      titulo: 'Alertas medias', 
      descripcion: 'Descripcion basica', 
      backgroundColor: '#FFC09F', 
      
    },
    { 
      titulo: 'Alertas rojas', 
      descripcion: 'Descripcion basica', 
      backgroundColor: '#FCF5C7', 
       
    },
    { 
      titulo: 'Sensores deshabilitados', 
      descripcion: 'Descripcion basica', 
      backgroundColor: '#FCF5C7', 
      
    },{ 
      titulo: 'Lecturas OK', 
      descripcion: 'Descripcion basica', 
      backgroundColor: '#FFEE93',
       
    },
    { 
      titulo: 'Alertas medias', 
      descripcion: 'Descripcion basica', 
      backgroundColor: '#FFC09F', 
      
    },
    { 
      titulo: 'Alertas rojas', 
      descripcion: 'Descripcion basica', 
      backgroundColor: '#FCF5C7', 
       
    },
    { 
      titulo: 'Sensores deshabilitados', 
      descripcion: 'Descripcion basica', 
      backgroundColor: '#FCF5C7', 
      
    },
  ];
}
