import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieCaroselComponent } from './movie-carosel.component';

describe('MovieCaroselComponent', () => {
  let component: MovieCaroselComponent;
  let fixture: ComponentFixture<MovieCaroselComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MovieCaroselComponent]
    });
    fixture = TestBed.createComponent(MovieCaroselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
