import { Component, OnInit, Input, OnChanges  } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css']
})
export class ServerElementComponent implements OnInit, OnChanges {

  // @Input() element: {type:string, name:string  , content:string };  // this is a property on app server element
  @Input('srvElement') element: {type: string, name: string, content: string};

  constructor() {
    console.log( ' 14 - constructor ');
  }

  ngOnInit() {
    console.log( ' 18 - ngOnInit ');
  }

  ngOnChanges(){
  console.log( ' 22 - ngOnChanges ');
  }
}
