import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LfAboutComponent } from './lf-about.component';

describe('LfAboutComponent', () => {
  let component: LfAboutComponent;
  let fixture: ComponentFixture<LfAboutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LfAboutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LfAboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
