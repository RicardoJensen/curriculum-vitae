import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionSubtitleComponent } from './section-subtitle.component';

describe('SectionSubtitleComponent', () => {
  let component: SectionSubtitleComponent;
  let fixture: ComponentFixture<SectionSubtitleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SectionSubtitleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionSubtitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
