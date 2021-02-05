import { Component, OnInit } from '@angular/core';
import * as grapesjs from 'grapesjs';
import 'grapesjs-preset-newsletter';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  name = 'Angular';

  ngOnInit() {
    let editor = grapesjs.init({
      container: '#gjs',
      plugins: ['gjs-preset-newsletter'],
      pluginsOpts: {
        'gjs-preset-newsletter': {
          modalTitleImport: 'Import template'
          // ... other options
        }
      }
    });
  }
}
