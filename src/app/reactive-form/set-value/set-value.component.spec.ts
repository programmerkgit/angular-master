import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SetValueComponent } from './set-value.component';

describe('UpdateValueComponent', () => {
  let component: SetValueComponent;
  let fixture: ComponentFixture<SetValueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SetValueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SetValueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
