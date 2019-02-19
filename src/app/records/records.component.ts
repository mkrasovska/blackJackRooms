import { Component, OnInit, OnDestroy } from '@angular/core';
import { MyFirstServiceService } from '../services/my-first-service.service';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-records',
  templateUrl: './records.component.html',
  styleUrls: ['./records.component.css']
})
export class RecordsComponent implements OnInit, OnDestroy {
  public records: {} = {};
  public recordsArr: TRecord[] = [];


  private _destroy$$: Subject<void> = new Subject();

  public constructor(private _myService: MyFirstServiceService, public router: Router) {}

  public ngOnInit(): void {
    this._myService
      .getRecords()
      .pipe(takeUntil(this._destroy$$))
      .subscribe((records: {}) => {
        this.recordsArr = records ? Object.values(records) : [];
        this.recordsArr.sort((a: TRecord, b: TRecord) => b.victories - a.victories);
      });
  }

  public ngOnDestroy(): void {
    this._destroy$$.next();
  }
}
