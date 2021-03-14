import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin.component';
import { GestprodComponent } from './gestprod/gestprod.component';
import { HomeadmComponent } from './homeadm/homeadm.component';


const routes: Routes = [{path : 'admin', component : AdminComponent,
children :[
  {path : 'gestprod', component : GestprodComponent},
  {path : 'homeadm', component : HomeadmComponent}]
}];
  
  



@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
