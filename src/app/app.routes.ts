import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'resonate'
    },
    {
        path: 'resonate',
        loadChildren: () => import('./modules/resonate/resonate.routes')
    }
];
