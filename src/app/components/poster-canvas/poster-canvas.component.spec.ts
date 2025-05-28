import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PosterCanvasComponent } from './poster-canvas.component';

describe('PosterCanvasComponent', () => {
  let component: PosterCanvasComponent;
  let fixture: ComponentFixture<PosterCanvasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PosterCanvasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PosterCanvasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
