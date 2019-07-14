import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExitVotingComponent } from './exit-voting.component';

describe('ExitVotingComponent', () => {
  let component: ExitVotingComponent;
  let fixture: ComponentFixture<ExitVotingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExitVotingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExitVotingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
