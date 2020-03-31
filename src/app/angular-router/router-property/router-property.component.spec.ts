import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RouterPropertyComponent } from './router-property.component';

describe('RouterEventComponent', () => {
  let component: RouterPropertyComponent;
  let fixture: ComponentFixture<RouterPropertyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RouterPropertyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RouterPropertyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
