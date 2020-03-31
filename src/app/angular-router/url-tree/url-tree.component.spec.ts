import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UrlTreeComponent } from './url-tree.component';

describe('UrlTreeComponent', () => {
  let component: UrlTreeComponent;
  let fixture: ComponentFixture<UrlTreeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UrlTreeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UrlTreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
