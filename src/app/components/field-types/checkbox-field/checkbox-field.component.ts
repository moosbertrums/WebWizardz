import {Component, input} from '@angular/core';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {PosterField} from '../../../models/field';

@Component({
  selector: 'app-checkbox-field',
  imports: [MatCheckboxModule],
  template: `
    <mat-checkbox [required]="field().required">
      {{field().label}}
    </mat-checkbox>
  `,
  styles: ``
})
export class CheckboxFieldComponent {
  field = input.required<PosterField>();
}
