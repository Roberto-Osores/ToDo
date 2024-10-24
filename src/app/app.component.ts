import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TaskItemComponent } from "./components/task-item/task-item.component";
import { NgFor } from '@angular/common';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TaskItemComponent, NgFor],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ToDo';

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
      
    },
  ];
}
