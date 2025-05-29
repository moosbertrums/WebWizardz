import {Component, computed, inject, input} from '@angular/core';
import {PosterField} from '../../../models/field';
import {FieldTypesService} from '../../../services/field-types.service';
import {NgComponentOutlet} from '@angular/common';

@Component({
  selector: 'app-poster-field',
  imports: [NgComponentOutlet],
  template: `
    <div class="bg-white p-4 rounded-lg shadow-sm border-gray-200 hover:border-black cursor-pointer">
      <ng-container [ngComponentOutlet]="previewComponent()" [ngComponentOutletInputs]="{ field: field() }"></ng-container>
    </div>
  `,
  styles: ``
})
export class PosterFieldComponent {
  field = input.required<PosterField>();

  fieldTypesService = inject(FieldTypesService);

  previewComponent = computed(() => {
    const type = this.fieldTypesService.getFieldType(this.field().type);
    return type?.component ?? null;
  });
}
