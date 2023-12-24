import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LangagesListComponent } from './languages-list.component';

describe('LangagesListComponent', () => {
  let component: LangagesListComponent;
  let fixture: ComponentFixture<LangagesListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LangagesListComponent]
    });
    fixture = TestBed.createComponent(LangagesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
