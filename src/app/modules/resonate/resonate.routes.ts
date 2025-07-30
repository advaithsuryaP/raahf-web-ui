import { Route } from '@angular/router';

export default [
    {
        path: '',
        loadComponent: () => import('./resonate')
    }
] as Route[];
