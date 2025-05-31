import {Component, signal} from '@angular/core';
import {PosterEditorComponent} from './poster-editor/poster-editor.component';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {PosterPreviewComponent} from './poster-preview/poster-preview.component';

@Component({
  selector: 'app-poster-canvas',
  imports: [PosterEditorComponent, MatButtonToggleModule, PosterPreviewComponent],
  template: `

    <div class="p-4 bg-white rounded-lg h-[calc(100vh-150px)] overflow-y-auto border-gray-200 shadow-sm">
      <div class="pb-4 border-b border-gray-200 flex gap-2">
        <h3 class="text-xl font-medium">Poster Canvas</h3>
        <mat-button-toggle-group [(value)] ="activeTab">
          <mat-button-toggle value="editor">Editor</mat-button-toggle>
          <mat-button-toggle value="preview">Preview</mat-button-toggle>
        </mat-button-toggle-group>
      </div>
        @if(activeTab() === 'editor') {
          <app-poster-editor />
        } @else {
          <app-poster-preview />
        }


    </div>
  `,
  styles: ``
})
export class PosterCanvasComponent {
  activeTab = signal<'editor' | 'preview'>('editor');
}
