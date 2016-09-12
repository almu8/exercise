import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModalWindow } from './modal-window.component';

const appRoutes: Routes = [
    {
        path: '',
        component: ModalWindow
    },
    {
        path: 'user/:id',
        component: ModalWindow
    }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);