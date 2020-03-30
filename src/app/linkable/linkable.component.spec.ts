import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LinkableComponent } from './linkable.component';

describe('LinkableComponent', () => {
  let component: LinkableComponent;
  let fixture: ComponentFixture<LinkableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LinkableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LinkableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
