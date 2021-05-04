import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { TaskListModel } from 'src/app/services/models/task-list.model';
import { Tasks } from 'src/app/services/models/tasks.model';
import { SizeCalculator } from 'src/app/shared/sizeCalculator/size-calculator.model';
import { TaskFormComponent } from '../task-form/task-form.component';

@Component({
  selector: 'app-taks-lists',
  templateUrl: './taks-lists.component.html',
  styleUrls: ['./taks-lists.component.scss']
})
export class TaksListsComponent implements OnInit, AfterViewInit {
  @Input('parent') parent: HTMLElement
  @Input('taskList') taskLists: TaskListModel

  constructor(public dialog: MatDialog) {

  }

  ngOnInit(): void {
  }
  ngAfterViewInit(): void {
  }

  getColor(): string {
    return `#${this.taskLists.color.red}${this.taskLists.color.green}${this.taskLists.color.blue}`
  }
  onTaskDelete(task: Tasks) {
    this.taskLists.tasks = this.taskLists.tasks.filter(t => t.id != task.id)
  }

  openDialog(task?: Tasks) {
    let dialogRef = this.dialog.open(TaskFormComponent, {
      height: '350px',
      width: '400px',
      data: {
        id: task?.id, title: task?.title, note: task?.note, date: task?.date, color: task?.color, colorId: task?.colorId, done: task?.done, tags: task?.tags,
        tagIds: task?.tagIds
      }
    });
    dialogRef.afterClosed().subscribe(result => {
      if (!result) return;
      if (result.isNew) {
        this.taskLists.tasks.push(result.data);
        return;
      }
      let index = this.taskLists.tasks.indexOf(task);
      this.taskLists.tasks[index] = result.data
      
    })
  }

}
