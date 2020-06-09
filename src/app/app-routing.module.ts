import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {PromiseComponent} from './promise/promise.component';
import {BlogListComponent} from "./javabrains/blog-list/blog-list.component";
import {ObservableComponent} from "./observable/observable.component";
import {ListComponent} from "./observable/list/list.component";
import {FormEventComponent} from "./observable/form-event/form-event.component";
import {IntervalComponent} from "./observable/interval/interval.component";
import {OfFromComponent} from "./observable/of-from/of-from.component";
import {ToArrayComponent} from "./observable/to-array/to-array.component";
import {CustomComponent} from "./observable/custom/custom.component";
import {MapComponent} from "./observable/map/map.component";
import {PluckComponent} from "./observable/pluck/pluck.component";
import {FilterComponent} from "./observable/filter/filter.component";
import {TapComponent} from "./observable/tap/tap.component";

const routes: Routes = [
  {path: 'promise', component: PromiseComponent},
  {
    path: 'observable', component: ObservableComponent, children: [
      {path: '', component: ListComponent},
      {path: 'formEvent', component: FormEventComponent},
      {path: 'interval', component: IntervalComponent},
      {path: 'ofFrom', component: OfFromComponent},
      {path: 'toArray', component: ToArrayComponent},
      {path: 'custom', component: CustomComponent},
      {path: 'map', component: MapComponent},
      {path: 'pluck', component: PluckComponent},
      {path: 'filter', component: FilterComponent},
      {path: 'tap', component: TapComponent}
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
