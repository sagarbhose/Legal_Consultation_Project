import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LawyerAnswerComponent } from './lawyer-answer.component';

describe('LawyerAnswerComponent', () => {
  let component: LawyerAnswerComponent;
  let fixture: ComponentFixture<LawyerAnswerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LawyerAnswerComponent]
    });
    fixture = TestBed.createComponent(LawyerAnswerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
