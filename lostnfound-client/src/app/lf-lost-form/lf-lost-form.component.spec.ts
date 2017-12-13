import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LfLostFormComponent } from './lf-lost-form.component';

describe('LfLostFormComponent', () => {
  let component: LfLostFormComponent;
  let fixture: ComponentFixture<LfLostFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LfLostFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LfLostFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
