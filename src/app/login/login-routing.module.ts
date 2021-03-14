import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from '../client/home/home.component';
import { SingupComponent } from './singup/singup.component';


export const loginRouting: Routes = [
  {
   path: '', component: SingupComponent, canActivateChild: [],
      children: [
         
          { path: 'home', component: HomeComponent },
         
      ]
     }
    ]
@NgModule({
  imports: [RouterModule.forChild(loginRouting)],
  exports: [RouterModule]
})
export class LoginRoutingModule { }
