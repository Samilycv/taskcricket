import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NumberofmatchesComponent } from './numberofmatches.component';

describe('NumberofmatchesComponent', () => {
  let component: NumberofmatchesComponent;
  let fixture: ComponentFixture<NumberofmatchesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NumberofmatchesComponent]
    });
    fixture = TestBed.createComponent(NumberofmatchesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
