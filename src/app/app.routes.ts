import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'resonate'
    },
    {
        path: 'finance',
        loadChildren: () => import('./modules/finance/finance.routes')
    },
    {
        path: 'resonate',
        loadChildren: () => import('./modules/resonate/resonate.routes')
    }
];
