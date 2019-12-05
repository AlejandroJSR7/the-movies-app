import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopMoviesOfAllTimeComponent } from './top-movies-of-all-time.component';

describe('TopMoviesOfAllTimeComponent', () => {
  let component: TopMoviesOfAllTimeComponent;
  let fixture: ComponentFixture<TopMoviesOfAllTimeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopMoviesOfAllTimeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopMoviesOfAllTimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
