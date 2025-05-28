import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PosterSettingsComponent } from './poster-settings.component';

describe('PosterSettingsComponent', () => {
  let component: PosterSettingsComponent;
  let fixture: ComponentFixture<PosterSettingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PosterSettingsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PosterSettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
