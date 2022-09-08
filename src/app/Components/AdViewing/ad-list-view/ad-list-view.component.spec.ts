import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdListViewComponent } from './ad-list-view.component';

describe('AdListViewComponent', () => {
  let component: AdListViewComponent;
  let fixture: ComponentFixture<AdListViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdListViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdListViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
