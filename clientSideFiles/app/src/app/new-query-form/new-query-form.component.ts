import { Component, } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-new-query-form',
  templateUrl: './new-query-form.component.html',
  styleUrls: ['./new-query-form.component.scss']
})
export class NewQueryFormComponent {

  form = this.formBuilder.group({
    length: 8,
  })

  componentState = {
    newPassword:'',
  }

  onSubmit(): void {
    const newResponse = fetch(`https://localhost:5000?passwordLength=${this.form.value.length}`)
      .then((res) => {res.json()})
      .then((data) => {console.log(data)})
      .catch((err) => console.log(err));

    this.componentState.newPassword = newResponse.toString();
  }

  constructor(
    private formBuilder: FormBuilder,
  ) {}
}
