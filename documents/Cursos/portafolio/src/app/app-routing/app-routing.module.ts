import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Routes, RouterModule} from '@angular/router';

import { PortafolioComponent } from '../pages/portafolio/portafolio.component';
import { AboutComponent } from '../pages/about/about.component';
import { ItemComponent } from '../pages/item/item.component';
import { BlogComponent } from '../pages/blog/blog.component';
import { SearchComponent } from '../pages/search/search.component';


const app_routes: Routes = [
 { path: 'home', component: PortafolioComponent } ,
 { path:'about', component: AboutComponent },
 { path:'item/:id', component: ItemComponent },
 { path:'search/:termino', component: SearchComponent },

 { path: 'blog', component:BlogComponent},
 { path:'**', pathMatch: 'full', redirectTo:'home' }
];


@NgModule({
 
  imports: [
    
    RouterModule.forRoot(app_routes, {useHash:true}),
    CommonModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
