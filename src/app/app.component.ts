import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TaskItemComponent } from "./components/task-item/task-item.component";
import { NgFor } from '@angular/common';
import {ChangeDetectionStrategy, inject} from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {
  MatDialog,
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogTitle,
} from '@angular/material/dialog';
import { NewTaskDialogComponent } from './components/new-task-dialog/new-task-dialog.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TaskItemComponent, NgFor, MatButtonModule],changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ToDo';

  readonly dialog = inject(MatDialog);

  openDialog() {
    this.dialog.open(NewTaskDialogComponent);
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
