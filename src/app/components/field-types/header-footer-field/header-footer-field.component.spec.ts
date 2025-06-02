import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderFooterFieldComponent } from './header-footer-field.component';

describe('HeaderFooterFieldComponent', () => {
  let component: HeaderFooterFieldComponent;
  let fixture: ComponentFixture<HeaderFooterFieldComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeaderFooterFieldComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeaderFooterFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
