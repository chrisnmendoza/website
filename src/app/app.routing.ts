import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home';
import { AboutComponent } from './about';
import { ProjectsComponent } from './projects';
import { ExperienceComponent } from './experience/experience.component';

const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'login', component: AboutComponent },
    { path: 'register', component: ProjectsComponent },
    { path: 'experience', component: ExperienceComponent },

    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

export const appRoutingModule = RouterModule.forRoot(routes);