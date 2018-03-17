import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BibleViewComponent } from './bible-view.component';

describe('BibleViewComponent', () => {
  let component: BibleViewComponent;
  let fixture: ComponentFixture<BibleViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BibleViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BibleViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
