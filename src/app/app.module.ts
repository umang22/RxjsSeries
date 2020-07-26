import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {HeaderComponent} from './includes/header/header.component';
import {PromiseComponent} from './promise/promise.component';
import {AppRoutingModule} from './app-routing.module';
import {BlogListComponent} from "./javabrains/blog-list/blog-list.component";
import {BlogPostTileComponent} from "./javabrains/blog-post-tile/blog-post-tile.component";
import {PaginatorComponent} from "./javabrains/paginator/paginator.component";
import {CardComponent} from "./javabrains/card/card.component";
import {TruncatePipe} from "./javabrains/class/truncate.pipe";
import {BlogDataService} from "./javabrains/service/blog-data.service";
import {ObservableComponent} from './observable/observable.component';
import {ListComponent} from './observable/list/list.component';
import {FormEventComponent} from './observable/form-event/form-event.component';
import {IntervalComponent} from './observable/interval/interval.component';
import {OfFromComponent} from './observable/of-from/of-from.component';
import {ToArrayComponent} from './observable/to-array/to-array.component';
import {CustomComponent} from './observable/custom/custom.component';
import {MapComponent} from './observable/map/map.component';
import {PluckComponent} from './observable/pluck/pluck.component';
import {FilterComponent} from './observable/filter/filter.component';
import {TapComponent} from './observable/tap/tap.component';
import {FlatMapComponent} from './observable/flat-map/flat-map.component';
import {MergeMapComponent} from './observable/merge-map/merge-map.component';
import {ConcatMapComponent} from './observable/concat-map/concat-map.component';
import {ReduceComponent} from './observable/reduce/reduce.component';
import {StartWithComponent} from './observable/start-with/start-with.component';
import {SwitchMapComponent} from './observable/switch-map/switch-map.component';
import {AsyncSubjectComponent} from './observable/async-subject/async-subject.component';
import {ReplaySubjectComponent} from './observable/replay-subject/replay-subject.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PromiseComponent,
    BlogPostTileComponent,
    BlogListComponent,
    TruncatePipe,
    PaginatorComponent,
    CardComponent,
    ObservableComponent,
    ListComponent,
    FormEventComponent,
    IntervalComponent,
    OfFromComponent,
    ToArrayComponent,
    CustomComponent,
    MapComponent,
    PluckComponent,
    FilterComponent,
    TapComponent,
    FlatMapComponent,
    MergeMapComponent,
    ConcatMapComponent,
    ReduceComponent,
    StartWithComponent,
    SwitchMapComponent,
    AsyncSubjectComponent,
    ReplaySubjectComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    TruncatePipe, //isso faz com que o Pipe seja tratado como provider
    BlogDataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
