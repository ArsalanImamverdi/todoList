import { ChangeDetectorRef, Component, ElementRef, OnDestroy, OnInit } from '@angular/core';
import { TaskListModel } from 'src/app/services/models/task-list.model';
import { TaskListsService } from 'src/app/services/task-lists.service';
import { SizeCalculator } from 'src/app/shared/sizeCalculator/size-calculator.model';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit, OnDestroy {

  taskLists: TaskListModel[] = []
  sizeCalculator: SizeCalculator
  constructor(private taskListService: TaskListsService, private elementRef: ElementRef) {
    window.addEventListener('resize', this.recalculate)
  }


  ngOnInit(): void {

    this.recalculate();
    this.taskListService.getAll().subscribe(res => this.taskLists = res.data)
  }
  recalculate() {
    this.sizeCalculator = new SizeCalculator(window.innerWidth, window.innerHeight, 9);
    console.log(this.sizeCalculator);


  }
  ngOnDestroy(): void {
    window.removeEventListener('resize', this.recalculate)
  }
}
