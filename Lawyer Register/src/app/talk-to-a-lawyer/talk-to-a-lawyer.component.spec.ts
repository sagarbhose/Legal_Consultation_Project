import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TalkToALawyerComponent } from './talk-to-a-lawyer.component';

describe('TalkToALawyerComponent', () => {
  let component: TalkToALawyerComponent;
  let fixture: ComponentFixture<TalkToALawyerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TalkToALawyerComponent]
    });
    fixture = TestBed.createComponent(TalkToALawyerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
