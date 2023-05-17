import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LawyerRegisterComponent } from './lawyer-register.component';

describe('LawyerRegisterComponent', () => {
  let component: LawyerRegisterComponent;
  let fixture: ComponentFixture<LawyerRegisterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LawyerRegisterComponent]
    });
    fixture = TestBed.createComponent(LawyerRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
