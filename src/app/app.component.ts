import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {PosterCanvasComponent} from './components/poster-canvas/poster-canvas.component';
import {PosterElementsComponent} from './components/poster-elements/poster-elements.component';
import {PosterSettingsComponent} from './components/poster-settings/poster-settings.component';
import {DragDropModule} from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    PosterCanvasComponent,
    PosterElementsComponent,
    PosterSettingsComponent,
    DragDropModule
  ],
  template: `
    <div class="flex flex-col h-screen bg-blue-100 px-4">
      <div class="flex flex-col gap-1 items-center justify-center py-10">
        <h1 class="text-2xl text-blue-500 tracking-wide font-medium">
          WebWizardz Poster Designer
        </h1>
        <p class="text-gray-500">
          Ontwerp je eigen poster met behulp van deze tool!
        </p>
      </div>
      <div class="flex gap-4" cdkDropListGroup>
        <app-poster-elements class="w-64" />
        <app-poster-canvas class="flex-1" />
        <app-poster-settings class="w-64" />
      </div>
    </div>


  `,
  styles: [],
})
export class AppComponent {
  title = 'WebWizardz';
}
