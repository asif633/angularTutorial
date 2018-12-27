import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  {{title}}
  <router-outlet></router-outlet>
  `,
  styles: ['']
})
export class AppComponent {
  title = 'tutorialAng';
}
