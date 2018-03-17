import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BibleSelectorComponent } from './bible-selector.component';

describe('BibleSelectorComponent', () => {
  let component: BibleSelectorComponent;
  let fixture: ComponentFixture<BibleSelectorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BibleSelectorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BibleSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
