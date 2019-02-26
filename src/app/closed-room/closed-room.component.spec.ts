import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClosedRoomComponent } from './closed-room.component';

describe('ClosedRoomComponent', () => {
  let component: ClosedRoomComponent;
  let fixture: ComponentFixture<ClosedRoomComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClosedRoomComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClosedRoomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
