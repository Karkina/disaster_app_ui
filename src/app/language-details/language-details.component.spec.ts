import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LanguageDetailsComponent } from './language-details.component';

describe('LanguageDetailsComponent', () => {
  let component: LanguageDetailsComponent;
  let fixture: ComponentFixture<LanguageDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LanguageDetailsComponent]
    });
    fixture = TestBed.createComponent(LanguageDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
