import { Component , inject} from '@angular/core';
import {CdkDrag, CdkDragDrop, DragDropModule} from '@angular/cdk/drag-drop';
import {PosterService} from '../../../services/poster.service';
import {FieldTypeDefinition, PosterField} from '../../../models/field';
import {PosterFieldComponent} from '../poster-field/poster-field.component';
import {ResizableModule, ResizeEvent} from 'angular-resizable-element';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';

@Component({
  selector: 'app-poster-editor',
  imports: [DragDropModule, PosterFieldComponent, CdkDrag, ResizableModule, MatButtonModule, MatIconModule],
  template: `
    <div class="">
      @for (row of posterService.rows(); track row.id) {
        <div
          class="boundary h-flex rounded-lg border-2 border-dashed border-gray-200">
          <div
            class="rounded-lg border-2 border-dashed border-gray-200"
            cdkDropList
            (cdkDropListDropped)="onDropInRow($event, row.id)"
          >
            <div class="w-full p-4 border border-dashed border-primary-container rounded-lg border-gray-200">
              Drag and drop poster elements here
            </div>
          </div>
          <div class="flex flex-wrap">
            @for (field of row.fields; track field.id) {
              <!-- Resizable content -->

              <app-poster-field
                cdkDrag
                cdkDragBoundary=".boundary"
                [cdkDragData]="field"
                [field]="field"
              >
                <div
                >
                </div>
              </app-poster-field>
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
