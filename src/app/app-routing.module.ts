import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserFormCreateComponent } from './user-form-create/user-form-create.component';
import { UserFormEditComponent } from './user-form-edit/user-form-edit.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'user/list',
    component: UserListComponent
  },

  {
    path: 'user/create',
    component: UserFormCreateComponent
  },
  {
    path: 'user/edit',
    component: UserFormEditComponent
  },

  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
