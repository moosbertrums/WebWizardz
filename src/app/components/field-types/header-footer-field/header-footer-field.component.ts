import {Component, input} from '@angular/core';
import {PosterField} from '../../../models/field';

@Component({
  selector: 'app-header-footer-field',
  imports: [],
  template: `
    <div class="bg-white size-full"></div>
  `,
  styles: ``
})
export class HeaderFooterFieldComponent {
  field = input.required<PosterField>();
}
