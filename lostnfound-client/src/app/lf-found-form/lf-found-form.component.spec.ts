import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LfFoundFormComponent } from './lf-found-form.component';

describe('LfFoundFormComponent', () => {
  let component: LfFoundFormComponent;
  let fixture: ComponentFixture<LfFoundFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LfFoundFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LfFoundFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
