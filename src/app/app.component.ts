import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public tasks = [];

  public form: FormGroup = new FormGroup ( {
    task: new FormControl()
  });

  submit() {
    this.tasks.push(this.form.value.task);
    this.form.reset();
    console.log(this.tasks);
  }
}
