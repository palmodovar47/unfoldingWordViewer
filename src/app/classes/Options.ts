import { UnfoldingWordProxy } from '@app/classes/unfoldingWord';

export class Options {
  langs: string[];
  fullLangNames: string[] = [];
  jsonProxy: UnfoldingWordProxy;

  getLangs(): string[] {
    return this.langs;
  }

  getBibleVersions(lang?: string): string[] {
    if (lang) {
      try {
        return this.jsonProxy.cat[0].langs
          .find(val => val.lc === lang).vers
            .map<string>(val => val.name);
      } catch (error) {
        return [''];
      }
    }
    return [''];
  }

  getBooks(lang?: string, bibleVersion?: string): string [] {
    if (lang && bibleVersion) {
      try {
        return this.jsonProxy.cat[0].langs
          .find(val => val.lc === lang).vers
            .find(val => val.name === bibleVersion).toc
              .map<string>(val => val.title);
      } catch (error) {
        return [''];
      }
    }
    return [''];
  }
}
