import {Component, input} from '@angular/core';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {PosterField} from '../../../models/field';

@Component({
  selector: 'app-text-field',
  imports: [MatFormFieldModule, MatInputModule],
  template: `
    <mat-form-field class="">
      <input
        matInput
        [type]="field().inputType  || 'text'"
        [required]="field().required"
      />
    </mat-form-field>
  `,
  styles: ``
})
export class TextFieldComponent {
  field = input.required<PosterField>();
}
