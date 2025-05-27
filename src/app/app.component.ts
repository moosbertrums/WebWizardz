import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  template: `
    <div class="flex flex-col h-screen bg-red-100 px-4">
      <div class="flex flex-col gap-1 items-center justify-center py-10">
        <h1 class="text-2x1 text-red-500 tracking-wide font-medium">
          WebWizardz Poster Designer
        </h1>
        <p class="text-gray-500">
          Ontwerp je eigen poster met behulp van deze tool!
        </p>
      </div>
    </div>
    <router-outlet />
  `,
  styles: [],
})
export class AppComponent {
  title = 'WebWizardz';
}
