import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';

import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { DataBaseService } from '../services/data-base.service';

@Component({
  selector: 'app-records',
  templateUrl: './records.component.html',
  styleUrls: ['./records.component.css']
})
export class RecordsComponent implements OnInit, OnDestroy {
  public records: TRecord[] = [];


  private _destroy$$: Subject<void> = new Subject();

  public constructor(public router: Router, private _dataBaseService: DataBaseService) {}

  public ngOnInit(): void {
    this._dataBaseService.getTopScores()
      .pipe(takeUntil(this._destroy$$))
      .subscribe((records: {}) => {
        this.records = records ? Object.values(records) : [];
        this.records.sort((a: TRecord, b: TRecord) => b.victories - a.victories);
      });
  }

  public ngOnDestroy(): void {
    this._destroy$$.next();
  }
}
