import { Component , inject} from '@angular/core';
import {CdkDragDrop, DragDropModule} from '@angular/cdk/drag-drop';
import {PosterService} from '../../../services/poster.service';
import {FieldTypeDefinition, PosterField} from '../../../models/field';
import {PosterFieldComponent} from '../poster-field/poster-field.component';

@Component({
  selector: 'app-poster-editor',
  imports: [DragDropModule, PosterFieldComponent],
  template: `
    <div class="p-4">
    @for (row of posterService.rows(); track row.id) {
      <div
        cdkDropList
        (cdkDropListDropped)="onDropInRow($event, row.id)"
        [cdkDropListOrientation]="'mixed'"
        class="p-4 bg-white rounded-lg border-2 border-dashed border-gray-200">
      <div>Row</div>
        <div class="flex gap-4 flex-wrap">
        @for (field of row.fields; track field.id) {
          <app-poster-field class="flex-1" [field]="field" />
        }
        </div>
      </div>
      }
    </div>
  `,
  styles: ``
})
export class PosterEditorComponent {

  posterService = inject(PosterService);

  onDropInRow(event: CdkDragDrop<string>, rowId: string) {
    if (event.previousContainer.data === 'field-selector'){
      const fieldType = event.item.data as FieldTypeDefinition;
      const newField: PosterField = {
        id: crypto.randomUUID(),
        type: fieldType.type,
        ...fieldType.defaultConfig,
      }
      this.posterService.addField(newField, rowId, event.currentIndex);
      return;
    }
  }

}
