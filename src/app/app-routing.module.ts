import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PaginaComponent } from './componets/pagina/pagina.component';

const routes: Routes = [{ path: '', redirectTo: '/componets', pathMatch: 'full' },
{ path: 'componets', component: PaginaComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
