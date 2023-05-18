import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LawyerProfileComponent } from './lawyer-profile.component';

describe('LawyerProfileComponent', () => {
  let component: LawyerProfileComponent;
  let fixture: ComponentFixture<LawyerProfileComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LawyerProfileComponent]
    });
    fixture = TestBed.createComponent(LawyerProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
