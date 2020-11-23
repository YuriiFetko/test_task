import {Component, OnInit} from '@angular/core';
import {DataService} from './shared/data.service';
import {Task} from './shared/interfaces';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'todo';

  form: FormGroup;

  public tasks: Task[];

  constructor(private dataService: DataService) {
  }

  ngOnInit(): void {
    setTimeout(() => {
      this.tasks = this.dataService.getAllTask();
    }, 1000);

    this.form = new FormGroup({
      title: new FormControl(null, [Validators.required, Validators.pattern('^.*[a-zA-Z0-9А-Яа-я].*$')]),
      text: new FormControl()
    });
  }

  submit(): void {
    if (this.form.invalid) {
      return;
    }

    const post: Task = {
      id: this.form.value.id,
      title: this.form.value.title,
      desc: this.form.value.text
    };

    this.dataService.addTask(post).subscribe(() => {
      this.form.reset();
    });

    console.log(post);
  }

  delete(taskId: Task): void {
    this.dataService.deleteTask(taskId.id);
  }

}
