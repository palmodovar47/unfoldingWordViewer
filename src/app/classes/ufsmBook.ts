import { Chapter, Verse } from '@app/classes/Chapter';
import { BibleSelectors } from '@app/classes/BibleSelectors';
import { Tag } from '@app/classes/Tag';

export class UfsmBook {

  tags: Tag[];
  chapters: Chapter[] = [];

  constructor (
    rawstring: string
  ) {
    this.tags = this.parseArrayOfUSFM(rawstring.split('\\'));
    let curChap: string;
    for (const tag of this.tags) {
      if (tag.ufsmTag === 'c') {
        this.chapters.push( new Chapter(tag) );
        curChap = tag.number;
      } if (tag.ufsmTag === 'v') {
        this.chapters.find( chap => chap.tag.number === curChap)
        .verses.push( new Verse(tag) );
      }
    }
  }

  private parseLineOfUSFM(input): Tag {
    const pattern = /^(\S+) *([\d-]*) *([\s\S]*)$/;
    const result = pattern.exec(input);
    if (result === null) {
      return new Tag(null, null, null);
    }
    return new Tag(result[1], result[2], result[3]);
  }

  private parseArrayOfUSFM(USFMArray: string[]): Tag[] {
    const result: Tag[] = [];
    USFMArray.forEach((element) => {
      result.push(
        this.parseLineOfUSFM(element)
      );
    });
    return result;
  }
}


// const interpreter = {
//  mt5: '<h5>@</h5>',
//  mt4: '<h4>@</h4>',
//  mt3: '<h3>@</h3>',
//  mt2: '<h2>@</h2>',
//  mt1: '<h1>@</h1>',
//   mt: '<h1>@</h1>',
//   s5: '<br>',
//   s4: '<br>',
//   s3: '<br>',
//   s2: '<br>',
//   s1: '<br>',
//   s:  '<br>',
//   c:  '<h4>@</h4>',
//   p:  '<p><span>  </span>@</p>',
//   v:  '<pre>@1</pre><span>@2</span>',
//   b:  '<br>',
//   q5: '<span>     </span>',
//   q4: '<span>    </span>',
//   q3: '<span>   </span>',
//   q2: '<span>  </span>',
//   q1: '<span> </span>',
//   q:  '<span> </span>',
//   m:  '<p>@</p>'
// };
