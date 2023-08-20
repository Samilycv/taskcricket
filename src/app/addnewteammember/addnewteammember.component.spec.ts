import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddnewteammemberComponent } from './addnewteammember.component';

describe('AddnewteammemberComponent', () => {
  let component: AddnewteammemberComponent;
  let fixture: ComponentFixture<AddnewteammemberComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddnewteammemberComponent]
    });
    fixture = TestBed.createComponent(AddnewteammemberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
