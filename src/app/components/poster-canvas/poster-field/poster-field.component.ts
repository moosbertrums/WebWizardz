import {Component, computed, inject, input} from '@angular/core';
import {PosterField} from '../../../models/field';
import {FieldTypesService} from '../../../services/field-types.service';
import {NgComponentOutlet, TitleCasePipe} from '@angular/common';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {PosterService} from '../../../services/poster.service';
import {FieldPreviewComponent} from '../field-preview/field-preview.component';

@Component({
  selector: 'app-poster-field',
  imports: [NgComponentOutlet, TitleCasePipe, MatButtonModule, MatIconModule, FieldPreviewComponent],
  template: `
    <div class="p-4 rounded-lg shadow-sm border-gray-200 hover:border-black">
      <div  class="flex item-center justify-between mb-1">
   <!--     <span>{{ field().type | titlecase }}</span> -->
        <button mat-icon-button (click)="deleteField($event)">
          <mat-icon class="-mr-2">delete</mat-icon>
        </button>
      </div>
      <app-field-preview [field]="field()" />
    </div>
  `,
  styles: ``
})
export class PosterFieldComponent {
  field = input.required<PosterField>();


  posterService = inject(PosterService);


  deleteField = (e: Event) => {
    e.stopPropagation();
    this.posterService.deleteField(this.field().id);
}

}
