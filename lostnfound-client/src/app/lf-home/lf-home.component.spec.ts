import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LfHomeComponent } from './lf-home.component';

describe('LfHomeComponent', () => {
  let component: LfHomeComponent;
  let fixture: ComponentFixture<LfHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LfHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LfHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
