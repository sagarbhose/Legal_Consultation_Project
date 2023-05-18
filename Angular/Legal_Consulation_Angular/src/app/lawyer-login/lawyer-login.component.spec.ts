import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LawyerLoginComponent } from './lawyer-login.component';

describe('LawyerLoginComponent', () => {
  let component: LawyerLoginComponent;
  let fixture: ComponentFixture<LawyerLoginComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LawyerLoginComponent]
    });
    fixture = TestBed.createComponent(LawyerLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
