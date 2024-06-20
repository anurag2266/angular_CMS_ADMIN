import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { LoginComponent } from './pages/login/login.component';
import { LoginGuard } from './login.guard';
import { CategoryComponent } from './pages/category/category.component';
import { AddcategoryComponent } from './pages/addcategory/addcategory.component';
import { ChangePassComponent } from './pages/change-pass/change-pass.component';
import { AddPostComponent } from './pages/add-post/add-post.component';
import { PostsComponent } from './pages/posts/posts.component';
import { ContactsComponent } from './pages/contacts/contacts.component';


const routes: Routes = [
  {path:'',component:LoginComponent},
  {path:'dashboard',component:DashboardComponent,canActivate:[LoginGuard],
  children:[
    {path:'category',component:CategoryComponent},
    {path:'add-cat',component:AddcategoryComponent},
    {path:'change-pass',component:ChangePassComponent},
    {path:'add-post',component:AddPostComponent},
    {path:'posts',component:PostsComponent},
    {path:'contacts',component:ContactsComponent}
  ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
