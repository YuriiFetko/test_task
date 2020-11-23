import {Component, Input, OnInit, Output} from '@angular/core';
import {Task} from '../shared/interfaces';
import {EventEmitter} from '@angular/core';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {

  @Input()
  public task: Task;

  @Output() deleteTask = new EventEmitter<Task>();

  constructor() {
  }

  ngOnInit(): void {
  }

  public delete(task: Task): void {
    this.deleteTask.emit(task);
  }

}
