import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {PromiseComponent} from './promise/promise.component';
import {BlogListComponent} from "./javabrains/blog-list/blog-list.component";

const routes: Routes = [
  {path: 'promise', component: PromiseComponent},
  {path: 'blogList', component: BlogListComponent},

  {path:'**',redirectTo:'promise'}
];

@NgModule({
  declarations: [],
  imports: [CommonModule,RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
