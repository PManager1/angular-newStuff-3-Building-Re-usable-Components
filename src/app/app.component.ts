import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  // serverElements = [];

  serverElements = [{type: 'server', name: 'Testserver', content: 'Just a test!'},
                    {type: 'server', name: 'server blue', content: 'Blue Test!'}];

}
