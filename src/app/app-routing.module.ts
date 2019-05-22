import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: './tabs/tabs.module#TabsPageModule' },
  { path: 'tab4', loadChildren: './tab4/tab4.module#Tab4PageModule' },
  { path: 'acerdade', loadChildren: './acerdade/acerdade.module#AcerdadePageModule' },
  { path: 'accion', loadChildren: './accion/accion.module#AccionPageModule' },
  { path: 'aventura', loadChildren: './aventura/aventura.module#AventuraPageModule' },
  { path: 'libroac1', loadChildren: './libroac1/libroac1.module#Libroac1PageModule' },
  { path: 'libroac2', loadChildren: './libroac2/libroac2.module#Libroac2PageModule' },
  { path: 'libroav1', loadChildren: './libroav1/libroav1.module#Libroav1PageModule' },
  { path: 'libroav2', loadChildren: './libroav2/libroav2.module#Libroav2PageModule' },
  { path: 'drama', loadChildren: './drama/drama.module#DramaPageModule' },
  { path: 'poesia', loadChildren: './poesia/poesia.module#PoesiaPageModule' },
  { path: 'infantil', loadChildren: './infantil/infantil.module#InfantilPageModule' },
  { path: 'librodr1', loadChildren: './librodr1/librodr1.module#Librodr1PageModule' },
  { path: 'librodr2', loadChildren: './librodr2/librodr2.module#Librodr2PageModule' },
  { path: 'libropo1', loadChildren: './libropo1/libropo1.module#Libropo1PageModule' },
  { path: 'libropo2', loadChildren: './libropo2/libropo2.module#Libropo2PageModule' },
  { path: 'libroin1', loadChildren: './libroin1/libroin1.module#Libroin1PageModule' },
  { path: 'libroin2', loadChildren: './libroin2/libroin2.module#Libroin2PageModule' },
  { path: 'compania', loadChildren: './compania/compania.module#CompaniaPageModule' },
  { path: 'proximamente', loadChildren: './proximamente/proximamente.module#ProximamentePageModule' },
  { path: 'contactenos', loadChildren: './contactenos/contactenos.module#ContactenosPageModule' },
  { path: 'pago', loadChildren: './pago/pago.module#PagoPageModule' }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
