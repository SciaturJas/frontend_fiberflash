import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DistritoComponent } from './pages/distrito/distrito.component';
import { ClientsComponent } from './pages/clients/clients.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'distrito',
        component: ClientsComponent
      }    
      // {
      //   path: 'perfil',
      //   component: PerfilSharedComponent
      // },
      // {
      //   path: 'reporte-pagos',
      //   component: CobrosComponent
      // },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UtilsRoutingModule { }
