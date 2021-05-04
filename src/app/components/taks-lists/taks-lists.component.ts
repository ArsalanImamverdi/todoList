import { Component, Input, OnInit } from '@angular/core';
import { TaskListModel } from 'src/app/services/models/task-list.model';

@Component({
  selector: 'app-taks-lists',
  templateUrl: './taks-lists.component.html',
  styleUrls: ['./taks-lists.component.scss']
})
export class TaksListsComponent implements OnInit {

  @Input('taskList') taskLists: TaskListModel
  constructor() {

  }

  ngOnInit(): void {
  }
  getColor(): string {
    return `#${this.taskLists.color.red}${this.taskLists.color.green}${this.taskLists.color.blue}`
  }

}
