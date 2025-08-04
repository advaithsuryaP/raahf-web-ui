import { Route } from '@angular/router';

export default [
    {
        path: '',
        loadComponent: () => import('./finance.component')
    }
] as Route[];
