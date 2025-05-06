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
      },]
  },
  {
    
    path: 'main',
    loadComponent: () => import('./main/main.page').then( m => m.MainPage)
  },
  { path: 'home', loadComponent: () => import('./main/main.page').then( m => m.MainPage) },      
  { path: 'explore', loadComponent: () => import('./main/main.page').then( m => m.MainPage) },
  { path: 'jobs', loadComponent: () => import('./main/main.page').then( m => m.MainPage) },
  { path: 'notifications', loadComponent: () => import('./main/main.page').then( m => m.MainPage) },
  { path: 'profile', loadComponent: () => import('./main/main.page').then( m => m.MainPage) },
  { path: '', redirectTo: '/tabs/home', pathMatch: 'full' },
  {
    path: 'tabs',
    loadComponent: () => import('./tabs/tabs.page').then( m => m.TabsPage)
  }
];



