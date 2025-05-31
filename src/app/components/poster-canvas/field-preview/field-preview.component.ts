import {Component, computed, inject, input} from '@angular/core';
import {NgComponentOutlet} from '@angular/common';
import {PosterField} from '../../../models/field';
import {FieldTypesService} from '../../../services/field-types.service';

@Component({
  selector: 'app-field-preview',
  imports: [NgComponentOutlet],
  template: `
    <ng-container [ngComponentOutlet]="previewComponent()" [ngComponentOutletInputs]="{ field: field() }"></ng-container>

  `,
  styles: ``
})
export class FieldPreviewComponent {
  field = input.required<PosterField>();
  fieldTypesService = inject(FieldTypesService);
  previewComponent = computed(() => {
    const type = this.fieldTypesService.getFieldType(this.field().type);
    return type?.component ?? null;
  });

}
