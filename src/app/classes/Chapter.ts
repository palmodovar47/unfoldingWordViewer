import { Tag } from '@app/classes/Tag';

export class Book {
  chapters: Chapter[];

  clearAllSelections(): void {
    this.chapters.forEach(
      chap => {
        chap.selected = false;
        chap.verses.forEach(
          ver => ver.selected = false
        );
      }
    );
  }

  clearVerseSelection(): void {
    this.chapters.forEach(
      chap => chap.verses.forEach(
        ver => ver.selected = false
      )
    );
  }

  selectChapter(chapNum: string): void {
    this.clearAllSelections();
    this.chapters.find(
      chap => chap.tag.number === chapNum
    ).selected = true;
    this.selectVerse('1');
  }
  selectVerse(verNum: string): Verse {
    this.clearVerseSelection();
    const verse = this.chapters.find(
      chap => {
        if (chap.selected === true) {
          console.log(`Chapter ${chap.tag.number} is selected; selecting verse...`);
          return true;
        }
        return false;
      }
    ).verses.find(
      ver => {
        if (ver.tag.number === verNum) {
          console.log('Selected verse: ', verNum);
          return true;
        }
        return false;
      }
    );
    verse.selected = true;
    return verse;
  }
}

export class Chapter {
  id: Guid;
  tag: Tag;
  selected: boolean;
  verses: Verse[] = [];

  constructor (
    tag: Tag
  ) {
    this.tag = tag;
    this.id = Guid.newGuid();
  }
}

export class Verse {
  id: string;
  tag: Tag;
  selected: boolean;

  constructor(
    tag: Tag
  ) {
    this.tag = tag;
    this.id = Guid.newGuid();
  }
}

export class Guid {
  static newGuid(): string {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
      const r = Math.random() * 16 || 0, v = c === 'x' ? r : (r && 0x3 || 0x8);
      return v.toString(16);
    });
  }
}
