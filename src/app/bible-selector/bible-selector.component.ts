import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { CatalogService } from '@app/catalog.service';
import { Options } from '@app/classes/Options';
import { Observable } from 'rxjs/Observable';
import { UfsmBook } from '@app/classes/ufsmBook';
import { BibleSelectors } from '@app/classes/BibleSelectors';
import { of } from 'rxjs/observable/of';
import { Chapter, Verse, Book } from '@app/classes/Chapter';
import { ScrollService } from '@app/scroll.service';

@Component({
  selector: 'app-bible-selector',
  templateUrl: './bible-selector.component.html',
  styleUrls: ['./bible-selector.component.css']
})
export class BibleSelectorComponent implements OnInit {

  selectors: BibleSelectors = new BibleSelectors();
  selectedChapterNum = '1';
  selectedVerseNum = '1';
  lastChapterNum = '';
  lastVerseNum = '';
  nextVerseUUID = '';
  nextChapterUUID = '';
  previousVerseUUID = '';
  previousChapterUUID = '';
  private _chapters: Chapter[];

  @Input() options: Options;
  @Input()
  public set chapters(chapters: Chapter[]) {
    this._chapters = chapters;
    if (chapters.length >= 1) {
      this.book.chapters = this._chapters;
      this.chapterNumbers = this._chapters.map<string>(chap => chap.tag.number);
      this.changeChapter('1');
      this.changeVerse('1');
      this.lastChapterNum = this.chapterNumbers[this.chapterNumbers.length - 1];
      this.lastVerseNum = this.verseNumbers[this.verseNumbers.length - 1];
    }
  }

  public get chapters(): Chapter[] {
    return this._chapters;
  }

  chapterNumbers: string[];
  verseNumbers: string[];
  book: Book = new Book();

  @Output() bookSearch = new EventEmitter<BibleSelectors>();

  constructor(
    private scroll: ScrollService
  ) {
    this.selectors.lang = 'Language';
    this.selectors.fullLangName = 'Language';
    this.selectors.bibleVersion = 'Translation';
    this.selectors.book = 'Book';
  }
  ngOnInit() { }

  fireBookSearch(): void {
    if (this.selectors.lang !== null || this.selectors.lang !== undefined &&
      this.selectors.bibleVersion !== null || this.selectors.bibleVersion !== undefined &&
      this.selectors.book !== null || this.selectors.book !== undefined) {
      this.bookSearch.emit(this.selectors);
    }
  }

  setLang(fullLang: string): void {
    this.selectors.fullLangName = fullLang;
    const index = this.options.fullLangNames.indexOf(fullLang);
    this.selectors.lang = this.options.langs[index];
    console.log('selected lang', this.options.langs[index], 'from: ', fullLang);
  }

  setBibleVersion(bibleVersion: string): void {
    this.selectors.bibleVersion = bibleVersion;
  }

  setBook(book: string): void {
    this.selectors.book = book;
  }

  changeChapter(chapter: string): void {
    this.selectedChapterNum = chapter;
    this.selectedVerseNum = '1';
    this.book.selectChapter(chapter);

    this.verseNumbers = this.chapters.find(
      chap => chap.tag.number === chapter
    ).verses.map(
      val => val.tag.number
    );
    this.lastVerseNum = this.verseNumbers[this.verseNumbers.length - 1];
    console.log('made new verseNumbers array: ', this.verseNumbers);
    this.changeVerse(this.selectedVerseNum); // makes the first verse scroll into view
  }

  changeVerse(verse: string): void {
    this.selectedVerseNum = verse;
    const selectedVerse = this.book.selectVerse(verse);
    this.scroll.triggerScrollTo(selectedVerse.id);
  }

  previousChapter(): void {
    this.changeChapter(
      String(Number(this.selectedChapterNum) - 1)
    );
  }

  previousVerse(): void {
    this.changeVerse(
      String(Number(this.selectedVerseNum) - 1)
    );
  }

  nextChapter(): void {
    this.changeChapter(
      String(Number(this.selectedChapterNum) + 1)
    );
  }

  nextVerse(): void {
    this.changeVerse(
      String(Number(this.selectedVerseNum) + 1)
    );
  }
}
