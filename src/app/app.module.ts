import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { ScrollToModule } from '@nicky-lenaers/ngx-scroll-to';

import { AppComponent } from './app.component';
import { BibleViewComponent } from './bible-view/bible-view.component';
import { BibleSelectorComponent } from './bible-selector/bible-selector.component';
import { LangNameService } from '@app/lang-name.service';
import { CatalogService } from '@app/catalog.service';
import { BibleContainerComponent } from './bible-container/bible-container.component';
import { HttpClientModule } from '@angular/common/http';
import { ScrollService } from '@app/scroll.service';


@NgModule({
  declarations: [
    AppComponent,
    BibleViewComponent,
    BibleSelectorComponent,
    BibleContainerComponent
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    HttpClientModule,
    ScrollToModule.forRoot()
  ],
  providers: [
    LangNameService,
    CatalogService,
    ScrollService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
