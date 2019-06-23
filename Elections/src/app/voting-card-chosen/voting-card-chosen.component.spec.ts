import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VotingCardChosenComponent } from './voting-card-chosen.component';

describe('VotingCardChosenComponent', () => {
  let component: VotingCardChosenComponent;
  let fixture: ComponentFixture<VotingCardChosenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VotingCardChosenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VotingCardChosenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
