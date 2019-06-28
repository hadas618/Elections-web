import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleSearchFieldComponent } from './single-search-field.component';

describe('SingleSearchFieldComponent', () => {
  let component: SingleSearchFieldComponent;
  let fixture: ComponentFixture<SingleSearchFieldComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SingleSearchFieldComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleSearchFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
