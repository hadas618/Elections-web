import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GraphElectionsResultsComponent } from './graph-elections-results.component';

describe('GraphElectionsResultsComponent', () => {
  let component: GraphElectionsResultsComponent;
  let fixture: ComponentFixture<GraphElectionsResultsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GraphElectionsResultsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GraphElectionsResultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
