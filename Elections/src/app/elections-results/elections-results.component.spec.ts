import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ElectionsResultsComponent } from './elections-results.component';

describe('ElectionsResultsComponent', () => {
  let component: ElectionsResultsComponent;
  let fixture: ComponentFixture<ElectionsResultsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ElectionsResultsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ElectionsResultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
