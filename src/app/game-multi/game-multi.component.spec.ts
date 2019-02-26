import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GameMultiComponent } from './game-multi.component';

describe('GameMultiComponent', () => {
  let component: GameMultiComponent;
  let fixture: ComponentFixture<GameMultiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GameMultiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GameMultiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
