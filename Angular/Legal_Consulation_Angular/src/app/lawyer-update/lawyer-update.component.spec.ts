import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LawyerUpdateComponent } from './lawyer-update.component';

describe('LawyerUpdateComponent', () => {
  let component: LawyerUpdateComponent;
  let fixture: ComponentFixture<LawyerUpdateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LawyerUpdateComponent]
    });
    fixture = TestBed.createComponent(LawyerUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
