import { Injectable } from '@angular/core';
import { LangNamesProxy } from '@app/classes/LangNames';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { environment } from '@env/environment';

@Injectable()
export class LangNameService {

  typedLangJson: LangNamesProxy[] = [];
  langTranslationURL = environment.urls.langTranslationURL;

  constructor() { }

  getFullLangName(langInitials: string): Observable<string> {
    for (const lang of this.typedLangJson) {
      if (lang.lc === langInitials) {
        console.log(
          `found anglicized name, ${lang.ang}, for Language initials ${langInitials}`);
        return of(lang.ang);
      }
    }
  }
}
