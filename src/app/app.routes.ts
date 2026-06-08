import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { About } from './pages/about/about';
import { Projects } from './pages/projects/projects';
import { Contact } from './pages/contact/contact';


export const routes: Routes = [
    {
        path: '',
        loadComponent: () =>
            import('./pages/home/home').then(m => m.Home)
    },
    {
        path: 'about',
        loadComponent: () =>
            import('./pages/about/about').then(m => m.About)
    },
    {
        path: 'projects',
        loadComponent: () =>
            import('./pages/projects/projects').then(m => m.Projects)
    },
    {
        path: 'contact',
        loadComponent: () =>
            import('./pages/contact/contact')
                .then(m => m.Contact)
    },
    {
        path: 'projects/:id',
        loadComponent: () =>
            import('./pages/project-details/project-details')
                .then(m => m.ProjectDetails)
    }
];
