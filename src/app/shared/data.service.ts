import {TaskDAO} from '../testData/dao/taskDAO';
import {Task} from './interfaces';
import {Observable} from 'rxjs';
import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class DataService {
  taskDaoArray = new TaskDAO();

  getAllTask(): Task[] {
    return this.taskDaoArray.getAll();
  }

  addTask(task: Task): Observable<Task> {
    return this.taskDaoArray.add(task);
  }

  deleteTask(id: number): Observable<Task> {
    return this.taskDaoArray.delete(id);
  }

}
