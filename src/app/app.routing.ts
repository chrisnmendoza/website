import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home';
import { AboutComponent } from './about';
import { ProjectsComponent } from './projects';

const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'login', component: AboutComponent },
    { path: 'register', component: ProjectsComponent },

    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

export const appRoutingModule = RouterModule.forRoot(routes);