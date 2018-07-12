import { Component, OnInit,ViewChild } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import 'rxjs';
@Component({
  selector: 'app-increment-descriment',
  templateUrl: './increment-descriment.component.html',
  styleUrls: ['./increment-descriment.component.css']
})
export class IncrementDescrimentComponent implements OnInit {
  number$ = 4;

  @ViewChild("increment")increment;
  @ViewChild("decrement")decrement;

  constructor() { }

  ngOnInit() {
     const increment$ =  Observable.fromEvent(this.increment.nativeElement,'click')
     .map(event => 1 );
     const decrement$ =  Observable.fromEvent(this.decrement.nativeElement,'click')
     .map(event => -1 );
     Observable.merge(increment$,decrement$)
     .startWith(5)
     .scan((acc , curr) => acc + curr)
     .subscribe(number$ => {
       this.number$ = number$;
     });
  }

}
