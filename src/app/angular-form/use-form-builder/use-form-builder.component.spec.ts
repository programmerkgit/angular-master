import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UseFormBuilderComponent } from './use-form-builder.component';

describe('UseFormBuilderComponent', () => {
  let component: UseFormBuilderComponent;
  let fixture: ComponentFixture<UseFormBuilderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UseFormBuilderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UseFormBuilderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
