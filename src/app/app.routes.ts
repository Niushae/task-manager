import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'add-task',
    loadComponent: () => import('./pages/add-task/add-task').then((m) => m.AddTask),
  },
];