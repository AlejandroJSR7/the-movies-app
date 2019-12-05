import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopFiveMoviesComponent } from './top-five-movies.component';

describe('TopFiveMoviesComponent', () => {
  let component: TopFiveMoviesComponent;
  let fixture: ComponentFixture<TopFiveMoviesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopFiveMoviesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopFiveMoviesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
