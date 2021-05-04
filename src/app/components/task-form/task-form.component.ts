import { Component, Inject, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Tasks } from 'src/app/services/models/tasks.model';

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.scss']
})
export class TaskFormComponent implements OnInit {
  // @Input('data') data: Tasks
  form: FormGroup
  isNew: boolean = false;
  constructor(public dialogRef: MatDialogRef<TaskFormComponent>, @Inject(MAT_DIALOG_DATA) public data: any) {
    this.form = new FormGroup({ 'title': new FormControl(), date: new FormControl(), note: new FormControl() })
  }

  ngOnInit(): void {
    if (!this.data || !this.data.title || this.data.title == '') {
      this.data = <Tasks>{ id: 0, title: '', note: '', date: new Date(), done: false };
      this.isNew = true;
    }
  }

}
