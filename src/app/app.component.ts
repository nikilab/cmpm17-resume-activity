import { ChangeDetectionStrategy, Component, computed, inject, Signal, signal, WritableSignal} from '@angular/core';
import { Experience } from './experience.model';
import { EXPERIENCES } from './experience.mock';
import { LocationComponent } from './location/location.component';
import {MatExpansionModule} from '@angular/material/expansion';
import { RouterOutlet } from '@angular/router';
import {Router} from '@angular/router';


@Component({
  selector: 'app-component',
  imports: [MatExpansionModule, RouterOutlet],
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

  experiences:Experience[]= EXPERIENCES;
  currentName: WritableSignal<String>  = signal("nikki");

  cmpm17Student: Signal<Experience|undefined> = computed(() => {
    return this.experiences.find(
    exp => exp.name === this.currentName()
    )
  })

  router = inject(Router);
  nextpage(){
    this.router.navigate(['location']);
  }
  
}