import {Component, inject} from '@angular/core';
import {PosterService} from '../../../services/poster.service';
import {FieldPreviewComponent} from '../field-preview/field-preview.component';

@Component({
  selector: 'app-poster-preview',
  imports: [FieldPreviewComponent],
  template: `
    <div class="py-4">
      <div class="p-4 flex flex-col gap-4 shadow-md rounded-lg border border-gray-200">
        @for (row of posterService.rows(); track row.id) {
          <div class="flex flex-wrap">
            @for (field of row.fields; track field.id) {
              <div>
                <app-field-preview class ="flex-1" [field]="field" />
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
  posterService = inject(PosterService);
}
