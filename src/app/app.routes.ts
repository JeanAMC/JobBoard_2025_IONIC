import { Routes } from '@angular/router';
import { TabsPage } from './tabs/tabs.page';
export const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children: [
      {
        path: 'main',
        loadComponent: () =>
          import('./main/main.page').then((m) => m.MainPage),
      },
      {
        path: 'vacante',
        loadComponent: () =>
          import('./vacante/vacante.page').then((m) => m.VacantesPage),
      },
    {
        path: 'profile',
        loadComponent: () =>
          import('./profile/profile.page').then((m) => m.PerfilPage),
      },
    {
        path: 'postulacion',
        loadComponent: () =>
          import('./Postulaciones/postulaciones.page').then((m) => m.PostulacionPage),
      },]
  },
  {
    
    path: 'main',
    loadComponent: () => import('./main/main.page').then( m => m.MainPage)
  },
  { path: 'home', loadComponent: () => import('./main/main.page').then( m => m.MainPage) },      
  { path: 'explore', loadComponent: () => import('./main/main.page').then( m => m.MainPage) },
  { path: 'jobs', loadComponent: () => import('./vacante/vacante.page').then((m) => m.VacantesPage) },
  { path: 'notifications', loadComponent: () => import('./main/main.page').then( m => m.MainPage) },
  { path: 'profile', loadComponent: () => import('./profile/profile.page').then((m) => m.PerfilPage) },
  { path: '**', redirectTo: '/home' },
  {
    path: 'tabs',
    loadComponent: () => import('./tabs/tabs.page').then( m => m.TabsPage)
  }
];



