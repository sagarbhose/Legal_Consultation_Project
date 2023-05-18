import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayIpcComponent } from './display-ipc.component';

describe('DisplayIpcComponent', () => {
  let component: DisplayIpcComponent;
  let fixture: ComponentFixture<DisplayIpcComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DisplayIpcComponent]
    });
    fixture = TestBed.createComponent(DisplayIpcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
