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
