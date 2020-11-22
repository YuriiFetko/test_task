export class Task {
  add(task: Task): Observable<Task> {
    if (task.id === null || task.id === 0) {
      task.id = this.getLastIdTask();
    }

    if (task.status === null) {
      task.status = this.getStatus();
    }

    TestData.tasks.push(task);

    return of(task);
  }

  getLastIdTask(): number {
    return (
      Math.max.apply(
        Math,
        TestData.tasks.map((task) => task.id)
      ) + 1
    );
  }

  getStatus(): Status {
    return {id: 1, title: 'Active', completed: false};
  }

  delete(id: number): Observable<Task> {
    const taskTmp = TestData.tasks.find((t) => t.id === id);
    TestData.tasks.splice(TestData.tasks.indexOf(taskTmp), 1);

    return of(taskTmp);
  }
}
