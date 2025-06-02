import {Component, inject} from '@angular/core';
import {PosterService} from '../../../services/poster.service';
import {FieldPreviewComponent} from '../field-preview/field-preview.component';
import {PosterStateService} from '../../../services/poster-state.service';

@Component({
  selector: 'app-poster-preview',
  imports: [FieldPreviewComponent],
  template: `
    <div class="">
      <div
        [class]="state.imageSize"
        class="transition-all duration-300 flex flex-col shadow-md rounded-lg border border-gray-200 overflow-hidden">
        @for (row of posterService.rows(); track row.id) {
          <div class="">
            @for (field of row.fields; track field.id) {
              <div>
                <app-field-preview class ="" [field]="field" />
              </div>
            }
          </div>
        }

      </div>
    </div>
  `,
  styles: ``
})
export class PosterPreviewComponent {
  constructor(public state: PosterStateService, public posterService: PosterService) {}
}
