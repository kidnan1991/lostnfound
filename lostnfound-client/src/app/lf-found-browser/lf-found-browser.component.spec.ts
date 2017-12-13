import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LfFoundBrowserComponent } from './lf-found-browser.component';

describe('LfFoundBrowserComponent', () => {
  let component: LfFoundBrowserComponent;
  let fixture: ComponentFixture<LfFoundBrowserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LfFoundBrowserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LfFoundBrowserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
