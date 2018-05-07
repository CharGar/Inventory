
import {Component, Input} from '@angular/core';
import { log } from 'util';
import { logging } from 'selenium-webdriver';


@Component({
selector: 'pm-root',
template: `
  <div> <h1>{{title}}</h1>
  <pm-products></pm-products>
  </div>
`
})
export class AppComponent {
  title: string = 'Twirl Events';

}

