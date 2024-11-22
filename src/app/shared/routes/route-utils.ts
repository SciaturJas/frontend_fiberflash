import { Routes } from '@angular/router';

export const routeUtils: Routes = [
    {
        path: 'utils',
        loadChildren: () => import('../../utils/utils.module').then(m => m.UtilsModule)
    },
];
