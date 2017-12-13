import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LfItemDetailViewComponent } from './lf-item-detail-view.component';

describe('LfItemDetailViewComponent', () => {
  let component: LfItemDetailViewComponent;
  let fixture: ComponentFixture<LfItemDetailViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LfItemDetailViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LfItemDetailViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
