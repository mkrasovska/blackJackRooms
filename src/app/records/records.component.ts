import { Component, OnInit, OnDestroy } from '@angular/core';
import { MyFirstServiceService } from '../services/my-first-service.service';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';


@Component({
  selector: 'app-records',
  templateUrl: './records.component.html',
  styleUrls: ['./records.component.css']
})
export class RecordsComponent implements OnInit, OnDestroy {
  public records: {} = {};
  public recordsArr: TRecord[] = [];
  private _destroy$$: Subject<void> = new Subject();
  constructor(private _myService: MyFirstServiceService) {}

  ngOnInit() {
    this._myService
      .getRecords()
      .pipe(takeUntil(this._destroy$$))
      .subscribe((records: {}) => {
        this.recordsArr = records ? Object.values(records) : [];
        this.recordsArr.sort((a: TRecord, b: TRecord) => b.victories - a.victories);

        console.log(`subscribe`);
        console.log(this.records);
        console.log(this.recordsArr);
      });
  }

  ngOnDestroy() {
    this._destroy$$.next();
  }
}