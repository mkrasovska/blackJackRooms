import { TestBed, async, inject } from '@angular/core/testing';

import { RoomGuardGuard } from './room-guard.guard';

describe('RoomGuardGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RoomGuardGuard]
    });
  });

  it('should ...', inject([RoomGuardGuard], (guard: RoomGuardGuard) => {
    expect(guard).toBeTruthy();
  }));
});
