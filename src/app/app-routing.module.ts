import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {PromiseComponent} from './promise/promise.component';
import {BlogListComponent} from "./javabrains/blog-list/blog-list.component";
import {ObservableComponent} from "./observable/observable.component";
import {ListComponent} from "./observable/list/list.component";
import {FormEventComponent} from "./observable/form-event/form-event.component";

const routes: Routes = [
  {path: 'promise', component: PromiseComponent},
  {
    path: 'observable', component: ObservableComponent, children: [
      {path: '', component: ListComponent},
      {path: 'formEvent', component: FormEventComponent}
    ]
  },
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
