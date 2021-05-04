import { AfterViewInit, ChangeDetectorRef, Component, ElementRef, Input, OnDestroy, OnInit } from '@angular/core';
import { TaskListModel } from 'src/app/services/models/task-list.model';
import { TaskListsService } from 'src/app/services/task-lists.service';
import { SizeCalculator } from 'src/app/shared/sizeCalculator/size-calculator.model';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit, OnDestroy, AfterViewInit {
  @Input('parent') parent: HTMLElement
  taskLists: TaskListModel[] = []
  sizeCalculator: SizeCalculator
  constructor(private taskListService: TaskListsService, private cdr: ChangeDetectorRef) {
    // window.addEventListener('resize', this.recalculate)
  }



  ngOnInit(): void {


    this.taskListService.getAll().subscribe(res => this.taskLists = res.data)
  }
  ngAfterViewInit(): void {
    this.recalculate();
  }
  recalculate() {
    // this.sizeCalculator = new SizeCalculator(window, 9);
    // this.cdr.detectChanges();
  }
  ngOnDestroy(): void {
    // window.removeEventListener('resize', this.recalculate)
  }
}
