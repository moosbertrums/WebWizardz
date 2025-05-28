import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PosterElementsComponent } from './poster-elements.component';

describe('PosterElementsComponent', () => {
  let component: PosterElementsComponent;
  let fixture: ComponentFixture<PosterElementsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PosterElementsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PosterElementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
