import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BibleContainerComponent } from './bible-container.component';

describe('BibleContainerComponent', () => {
  let component: BibleContainerComponent;
  let fixture: ComponentFixture<BibleContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BibleContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BibleContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
