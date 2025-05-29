import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PosterFieldComponent } from './poster-field.component';

describe('PosterFieldComponent', () => {
  let component: PosterFieldComponent;
  let fixture: ComponentFixture<PosterFieldComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PosterFieldComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PosterFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
