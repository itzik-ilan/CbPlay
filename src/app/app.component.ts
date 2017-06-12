import { Component } from '@angular/core';
import { MusicRecord } from './MusicRecord';
import { recordes } from './records-mock';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'app works!';

  recordes: MusicRecord[] = [];

  constructor(){
    this.recordes = recordes;
  }

}
