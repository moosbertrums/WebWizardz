import { Component } from '@angular/core';
import {PosterEditorComponent} from './poster-editor/poster-editor.component';

@Component({
  selector: 'app-poster-canvas',
  imports: [PosterEditorComponent],
  template: `
    <div class="p-4 bg-white rounded-lg h-[calc(100vh-150px)] overflow-y-auto border-gray-200 shadow-sm">
      <div class="pb-4 border-b border-gray-200">
        <h3 class="text-xl font-medium">Poster Canvas</h3>
      </div>

      <app-poster-editor />

    </div>
  `,
  styles: ``
})
export class PosterCanvasComponent {

}
