import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { LoginGuard} from './login.guard';
import { HeaderComponent } from './pages/header/header.component';
import { MainComponent } from './pages/main/main.component';
import { SidebarComponent } from './pages/sidebar/sidebar.component';
import { AddcategoryComponent } from './pages/addcategory/addcategory.component';
import { CategoryComponent } from './pages/category/category.component';
import { ChangePassComponent } from './pages/change-pass/change-pass.component';
import { AddPostComponent } from './pages/add-post/add-post.component';
import { PostsComponent } from './pages/posts/posts.component';
import { ContactsComponent } from './pages/contacts/contacts.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    HeaderComponent,
    MainComponent,
    SidebarComponent,
    AddcategoryComponent,
    CategoryComponent,
    ChangePassComponent,
    AddPostComponent,
    PostsComponent,
    ContactsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    LoginGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
