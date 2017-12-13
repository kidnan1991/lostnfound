import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LfNavBarComponent } from './lf-nav-bar.component';

describe('LfNavBarComponent', () => {
  let component: LfNavBarComponent;
  let fixture: ComponentFixture<LfNavBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LfNavBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LfNavBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
