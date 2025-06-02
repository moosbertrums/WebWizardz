import {Injectable, signal} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PosterStateService {
  activeSize = signal<'size1' | 'size2' | 'size3'>('size1');

  get imageSize(): string {
    switch (this.activeSize()) {
      case 'size1':
        return ' w-91 h-137';
      case 'size2':
        return ' w-61 h-91';
      case 'size3':
        return ' w-51 h-76';
      default:
        return ' w-91 h-137';
    }
  }

}
