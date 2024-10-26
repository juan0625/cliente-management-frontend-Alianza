import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientListComponent } from './components/client-list/client-list.component';
import { ClientFormComponent } from './components/client-form/client-form.component';

const routes: Routes = [
  { path: '', redirectTo: '/clients', pathMatch: 'full' }, // Redirige a /clients por defecto
  { path: 'clients', component: ClientListComponent }, // Ruta para la lista de clientes
  { path: 'new-client', component: ClientFormComponent }, // Ruta para el formulario de nuevo cliente
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
