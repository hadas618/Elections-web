import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VotingCardResultsComponent } from './voting-card-results.component';

describe('VotingCardResultsComponent', () => {
  let component: VotingCardResultsComponent;
  let fixture: ComponentFixture<VotingCardResultsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VotingCardResultsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VotingCardResultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
