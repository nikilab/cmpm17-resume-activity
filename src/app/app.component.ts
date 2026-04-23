import { ChangeDetectionStrategy, Component, signal} from '@angular/core';

import {MatExpansionModule} from '@angular/material/expansion';


@Component({
  selector: 'app-component',
  imports: [MatExpansionModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
  
})
export class AppComponent {
  title = 'cmpm17-resume-activity';
  name: string = 'niki';
  skills: string[] = ['python','java','naps']
  prevexperience: string[] = ['Pricer, The Echo Shop']
  empty: string[] = []
  hasprevexperience(): boolean {
    return this.prevexperience !== this.empty
  }
  
}