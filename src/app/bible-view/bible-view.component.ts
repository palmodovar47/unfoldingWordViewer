import { Component, OnInit, Input } from '@angular/core';
import { UfsmBook } from '@app/classes/ufsmBook';
import { Chapter } from '@app/classes/Chapter';

@Component({
  selector: 'app-bible-view',
  templateUrl: './bible-view.component.html',
  styleUrls: ['./bible-view.component.css']
})
export class BibleViewComponent implements OnInit {

  @Input() chapters: Chapter[];

  constructor() { }

  ngOnInit() {
  }

}
