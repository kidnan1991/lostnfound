import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LfFooterComponent } from './lf-footer.component';

describe('LfFooterComponent', () => {
  let component: LfFooterComponent;
  let fixture: ComponentFixture<LfFooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LfFooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LfFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
