import { Routes } from '@angular/router';
import { TabsPage } from './tabs/tabs.page';
import { AuthGuard } from './guards/auth.guard';

export const routes: Routes = [

    {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: '',
    component: TabsPage,
    children: [
      
      {
        path: 'main',
        loadComponent: () =>
          import('./main/main.page').then((m) => m.MainPage),
        canActivate: [AuthGuard] 
      },
      {
        path: 'vacante',
        loadComponent: () =>
          import('./vacante/vacante.page').then((m) => m.VacantesPage),
          canActivate: [AuthGuard] 
      },
    {
        path: 'profile',
        loadComponent: () =>
          import('./profile/profile.page').then((m) => m.PerfilPage),
        canActivate: [AuthGuard]
      },
      {
        path: 'postulaciones-muestra/:vacanteId',
        loadComponent: () =>
          import('./postulaciones-muestra/postulaciones-muestra.page').then((m) => m.PostulacionesMuestraPage),
        canActivate: [AuthGuard]
      },
    {
      path: 'postulacion/:id',
      loadComponent: () => import('./Postulaciones/postulaciones.page').then(m => m.PostulacionPage),
      canActivate: [AuthGuard]
    }
,]
  },
  {
        path: 'login',
        loadComponent: () =>
          import('./login/login.page').then((m) => m.LoginPage),
        
      },
       {
        path: 'register',
        loadComponent: () =>
          import('./register/register.page').then((m) => m.RegisterPage),
      },
  {
    
    path: 'main',
    loadComponent: () => import('./main/main.page').then( m => m.MainPage),
    canActivate: [AuthGuard]

  },
  {
    path: 'agregar-vacante',
    loadComponent: () => import('./agregar-vacante/agregar-vacante.page').then( m => m.AgregarVacantePage),
        canActivate: [AuthGuard]
  },
  {
    path: 'postulaciones-muestra',
    loadComponent: () => import('./postulaciones-muestra/postulaciones-muestra.page').then( m => m.PostulacionesMuestraPage)
  },


];



