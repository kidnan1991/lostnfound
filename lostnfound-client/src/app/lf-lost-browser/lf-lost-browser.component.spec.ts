import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LfLostBrowserComponent } from './lf-lost-browser.component';

describe('LfLostBrowserComponent', () => {
  let component: LfLostBrowserComponent;
  let fixture: ComponentFixture<LfLostBrowserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LfLostBrowserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LfLostBrowserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
