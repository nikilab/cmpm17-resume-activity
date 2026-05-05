import { Routes } from '@angular/router';
import { LocationComponent } from './location/location.component';

export const routes: Routes = [
    { path: 'location', loadComponent() {
        //location component is at http://..../location
        return import('./location/location.component').then(m => m.LocationComponent);
    } },
];