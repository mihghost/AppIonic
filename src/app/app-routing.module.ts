import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    //redirectTo: 'folder/Inbox',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./pagina/home/home.module').then( m => m.HomePageModule)
  },
  
  {
    path: 'cod-cores',
    loadChildren: () => import('./pagina/cod-cores/cod-cores.module').then( m => m.CodCoresPageModule)
  },
  {
    path: 'quiz',
    loadChildren: () => import('./pagina/quiz/quiz.module').then( m => m.QuizPageModule)
  },
  
  {
    path: 'result/:duration',
    loadChildren: () => import('./pagina/result/result.module').then( m => m.ResultPageModule)
  },
  
  {
    path: 'materia',
    loadChildren: () => import('./pagina/materia/materia.module').then( m => m.MateriaPageModule)
  },
  {
    path: 'aprender',
    loadChildren: () => import('./pagina/aprender/aprender.module').then( m => m.AprenderPageModule)
  },
  
  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}

