import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScoreCheckComponent } from './score-check.component';

describe('ScoreCheckComponent', () => {
  let component: ScoreCheckComponent;
  let fixture: ComponentFixture<ScoreCheckComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScoreCheckComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScoreCheckComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
