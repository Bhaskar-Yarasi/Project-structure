import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ComComponent } from './com/com.component';
import { OneComponent } from './one/one.component';
import { ThreeComponent } from './three/three.component';


const routes: Routes = [

  { path: 'products', loadChildren: () => import('./products/products.module').then(m => m.ProductsModule) },
{path: 'two', component:ComComponent},
{path: 'one', component:OneComponent},
{path: 'three', component:ThreeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
