import {Observable, of} from 'rxjs';
import {Task} from '../../shared/interfaces';
import {TestData} from '../testData';

export class TaskDAO {

  getAll(): Task[] {
    return TestData.tasks;
  }


  add(task: Task): Observable<Task> {
    if (task.id === undefined || task.id === 0) {
      task.id = this.getLastIdTask();
    }

    TestData.tasks.push(task);

    return of(task);
  }

  getLastIdTask(): number {
    if (TestData.tasks.length === 0) {
      return 1;
    } else {
      return (
        Math.max.apply(
          Math, TestData.tasks.map((task) => task.id)
        ) + 1
      );
    }
  }

  delete(id: number): Observable<Task> {
    const taskTmp = TestData.tasks.find((t) => t.id === id);
    TestData.tasks.splice(TestData.tasks.indexOf(taskTmp), 1);

    return of(taskTmp);
  }
}
