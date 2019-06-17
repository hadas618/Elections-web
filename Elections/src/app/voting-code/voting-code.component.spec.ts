import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VotingCodeComponent } from './voting-code.component';

describe('VotingCodeComponent', () => {
  let component: VotingCodeComponent;
  let fixture: ComponentFixture<VotingCodeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VotingCodeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VotingCodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
