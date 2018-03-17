import { Component, OnInit } from '@angular/core';
import { Options } from '@app/classes/Options';
import { BibleSelectors } from '@app/classes/BibleSelectors';
import { CatalogService } from '@app/catalog.service';
import { UfsmBook } from '@app/classes/ufsmBook';

@Component({
  selector: 'app-bible-container',
  templateUrl: './bible-container.component.html',
  styleUrls: ['./bible-container.component.css']
})
export class BibleContainerComponent implements OnInit {

  hovering: boolean;
  ufsmBook: UfsmBook = new UfsmBook('');
  options: Options = this.catalog.options;

  // the container is incharge of talking to services and sending the right data
  // to the right sub components for selecting or viewing

  constructor(private catalog: CatalogService) {
    const datetime = new Date().getSeconds();
    console.log('initiated bible-container: ' + datetime);
  }
  ngOnInit() { }

  bookSearch(selectors: BibleSelectors) {
    this.catalog.getBook(selectors).subscribe(
      ufsmbook => this.ufsmBook = ufsmbook
    );
  }

  isHovering(yesno: boolean) {
    this.hovering = yesno;
  }
}
