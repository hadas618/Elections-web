import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsElectionsResultsComponent } from './details-elections-results.component';

describe('DetailsElectionsResultsComponent', () => {
  let component: DetailsElectionsResultsComponent;
  let fixture: ComponentFixture<DetailsElectionsResultsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailsElectionsResultsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsElectionsResultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
