import {Component, input} from '@angular/core';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {PosterField} from '../../../models/field';

@Component({
  selector: 'app-text-field',
  imports: [MatFormFieldModule, MatInputModule],
  template: `
    <mat-form-field class="size-full bg-white">
      <input
        matInput
        [type]="field().inputType  || 'text'"
        [required]="field().required"
        [placeholder]="field().placeholder || ''"
      />
    </mat-form-field>
  `,
  styles: ``
})
export class TextFieldComponent {
  field = input.required<PosterField>();
}
