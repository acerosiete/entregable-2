import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DigimonBusquedaComponent } from '../app/digimon-busqueda/digimon-busqueda.component'
import { DigimonsComponent } from '../app/components/digimons/digimons.component'
const routes: Routes = [
  { path: 'dashboard', component: DigimonsComponent},
  { path: 'busqueda', component: DigimonBusquedaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
