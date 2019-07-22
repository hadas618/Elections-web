import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VotingCardsListComponent } from './voting-cards-list.component';

describe('VotingCardsListComponent', () => {
  let component: VotingCardsListComponent;
  let fixture: ComponentFixture<VotingCardsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VotingCardsListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VotingCardsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
