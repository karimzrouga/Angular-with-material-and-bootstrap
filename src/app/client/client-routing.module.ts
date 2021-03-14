import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClientComponent } from './client.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { LoginComponent } from '../login/login.component';
import { StoreComponent } from './store/store.component';



const routes: Routes = [{path : 'client', component : ClientComponent,
children :[
  {path : 'home', component : HomeComponent,
  children :[
    {path : 'about', component : AboutComponent},
  ]}, {path : 'login', component :LoginComponent},
  {path : 'store', component :StoreComponent},
  

  
]

}];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientRoutingModule { }
