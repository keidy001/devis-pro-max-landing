import { Routes } from '@angular/router';
import { Landing } from './components/landing/landing';
import { Inscription } from './components/inscription/inscription';

export const routes: Routes = [

    { path: '', redirectTo: 'landing', pathMatch: 'full' },
    {path:"landing", component: Landing},
    {path:"inscription", component: Inscription},
];
