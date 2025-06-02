import {Component, signal} from '@angular/core';
import {PosterEditorComponent} from './poster-editor/poster-editor.component';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {PosterPreviewComponent} from './poster-preview/poster-preview.component';
import {PosterStateService} from '../../services/poster-state.service';

@Component({
  selector: 'app-poster-canvas',
  imports: [PosterEditorComponent, MatButtonToggleModule, PosterPreviewComponent],
  template: `
    <div class="p-4 bg-white rounded-lg h-[calc(100vh-150px)] overflow-y-auto border-gray-200 shadow-sm">
      <div class="pb-4 border-b border-gray-200 flex gap-2">
        <h3 class="text-xl font-medium">Poster Canvas</h3>
        <mat-button-toggle-group [(value)] ="activeImg">
          <mat-button-toggle value="img1">Image 1</mat-button-toggle>
          <mat-button-toggle value="img2">Image 2</mat-button-toggle>
          <mat-button-toggle value="img3">Image 3</mat-button-toggle>
        </mat-button-toggle-group>
        <div class="flex-1" ></div>
        <mat-button-toggle-group [(value)] ="activeSize">
          <mat-button-toggle value="size1">91x137</mat-button-toggle>
          <mat-button-toggle value="size2">61x91</mat-button-toggle>
          <mat-button-toggle value="size3">51x76</mat-button-toggle>
        </mat-button-toggle-group>
      </div>
      <div class="flex justify-center m-4">
      <div [class]="imageSrc  +  activeSize" class="m-auto rounded-lg border-gray-200 shadow-sm">
      <app-poster-editor/>
      </div>
      <div [class]="imageSrc  +  activeSize" class="m-auto rounded-lg border-gray-200 shadow-sm">
        <app-poster-preview/>
      </div>
      </div>
    </div>
  `,
  styles: ``
})
export class PosterCanvasComponent {

  constructor(public state: PosterStateService) {}

  activeImg = signal<'img1' | 'img2' | 'img3'>('img1');

  get imageSrc(): string {
    switch (this.activeImg()) {
      case 'img1':
        return 'bg-[url(https://i.pinimg.com/736x/16/bc/d9/16bcd982357a804b8f0dab0116b3c982.jpg)] ';
        case 'img2':
          return 'bg-[url(https://i.pinimg.com/736x/e4/90/c6/e490c667081e0cde91b8446f4c68b619.jpg)] ';
          case 'img3':
            return 'bg-[url(https://i.pinimg.com/736x/88/17/37/8817373d074aeb3497733bb3c0dd1bda.jpg)] ';
      default:
        return 'bg-[url(https://i.pinimg.com/736x/16/bc/d9/16bcd982357a804b8f0dab0116b3c982.jpg)] ';
    }
  }

  set activeSize(value: 'size1' | 'size2' | 'size3') {
    this.state.activeSize.set(value);
  }

  get activeSize() {
    return this.state.activeSize();
  }


}
