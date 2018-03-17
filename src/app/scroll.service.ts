import { Injectable } from '@angular/core';
import { ScrollToService, ScrollToConfigOptions } from '@nicky-lenaers/ngx-scroll-to';

@Injectable()
export class ScrollService {

  constructor(private scrollToService: ScrollToService) { }
  public triggerScrollTo(id: string) {

    const config: ScrollToConfigOptions = {
      // container: 'custom-container',
      target: id,
      duration: 325,
      // easing: 'easeOutElastic',
      // offset: 20
    };

    this.scrollToService.scrollTo(config);
  }
}
