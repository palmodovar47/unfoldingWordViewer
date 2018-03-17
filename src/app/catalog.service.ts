import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UnfoldingWordProxy } from '@app/classes/unfoldingWord';
import { Observable } from 'rxjs/Observable';
import { UfsmBook } from '@app/classes/ufsmBook';
import { BibleSelectors } from '@app/classes/BibleSelectors';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/zip';
import { Options } from '@app/classes/Options';
import { LangNameService } from '@app/lang-name.service';
import { LangNamesProxy } from '@app/classes/LangNames';
import { isDevMode } from '@angular/core';
import { environment } from '@env/environment';

@Injectable()
export class CatalogService {

  public options: Options = new Options();
  private typedCatalogJson: UnfoldingWordProxy;
  private catalogUrl = environment.urls.catalogUrl;
  private bookUrl = environment.urls.bookUrl;

  constructor( private http: HttpClient, private lang: LangNameService ) {

    const catalogConn = http.get<any>(this.catalogUrl)
      .map<any, UnfoldingWordProxy>(
        catalogJson => UnfoldingWordProxy.Parse(catalogJson.body));

    const langConn = http.get<any>(this.lang.langTranslationURL)
      .map<any, LangNamesProxy[]>(
        langJson => {
          const a = JSON.parse(langJson);
          a.forEach(langNameObj => LangNamesProxy.Create(langNameObj));
          return a;
        }
      );

    catalogConn.zip(langConn).subscribe(
      (pckg: [UnfoldingWordProxy, LangNamesProxy[]]) => {
        this.typedCatalogJson = pckg['0'];
        this.lang.typedLangJson = pckg['1'];
        this.setOptions();
        this.options.langs.forEach(inits => this.lang.getFullLangName(inits)
          .subscribe(fullName => this.options.fullLangNames.push(fullName)));
      }
    );
   }

  getBook(selectors: BibleSelectors): Observable<UfsmBook> {
    const url = this.bookUrl + this.getCatalogLink(selectors);
    return this.http.get(url).map<any, UfsmBook>( (res): UfsmBook => {
      return new UfsmBook(res.body);
    }, );
  }

  private getCatalogLink(selectors: BibleSelectors): string {
    return this.typedCatalogJson.cat[0].langs
      .find(lng => lng.lc === selectors.lang).vers
        .find(vrs => vrs.name === selectors.bibleVersion).toc
          .find(tc => tc['title'] === selectors.book).src; // wierd chrome error
        // necesitates using [''] notation instead of . notation... yeah, really
  }

  private setOptions(): void {
    const langset = new Set<string>();
    this.typedCatalogJson.cat[0].langs.forEach(val => langset.add(val.lc));
    this.options.langs = Array.from(langset);
    this.options.jsonProxy = this.typedCatalogJson;
  }
}
