import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LfReplaceErrPbuttonComponent } from './lf-replace-err-pbutton.component';

describe('LfReplaceErrPbuttonComponent', () => {
  let component: LfReplaceErrPbuttonComponent;
  let fixture: ComponentFixture<LfReplaceErrPbuttonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LfReplaceErrPbuttonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LfReplaceErrPbuttonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
