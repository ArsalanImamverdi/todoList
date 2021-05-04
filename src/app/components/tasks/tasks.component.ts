import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Tasks } from 'src/app/services/models/tasks.model';
import { TaskFormComponent } from '../task-form/task-form.component';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss']
})
export class TasksComponent implements OnInit {
  @Output('onDelete') onDelete: EventEmitter<void>;
  @Output('onUpdate') onUpdate: EventEmitter<void>;
  @Input('task') task: Tasks
  constructor() {
    this.onDelete = new EventEmitter<void>();
    this.onUpdate = new EventEmitter<void>();
  }

  ngOnInit(): void {

  }
}
