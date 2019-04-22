import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  // serverElements = [];

  serverElements = [{type: 'server', name: 'Test Server', content: 'just a test!'}];

}
