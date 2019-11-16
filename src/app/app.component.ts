import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  template: `
    <!--Header-->
    <app-header> </app-header>
   
    <router-outlet></router-outlet>
  `,
  styles: []
})
export class AppComponent {
  title = 'NyTimesArticles';
}
