import { Component, OnDestroy } from '@angular/core';
import { Observable, Subscription, interval } from 'rxjs';
import { retry, take, map, filter } from 'rxjs/operators';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styleUrls: ['./rxjs.component.css']
})
export class RxjsComponent implements OnDestroy{

  public intervalSubs: Subscription;

  constructor(){

    /*this.retornaObserv().pipe(
      retry(2)
    ).subscribe(
      valor => console.log('Subs: ', valor),
      error => console.warn('Error: ', error),
      () => console.info('Obs terminado.')
    );*/

    this.intervalSubs = this.retornaInterv().subscribe(console.log)
  }

  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.

    this.intervalSubs.unsubscribe();
    
  }

  retornaInterv() : Observable<number> {

    return interval(100).pipe(
      //take(10),
      map(valor => valor + 1),
      filter(valor => (valor % 2 === 0) ? true : false),
      );

  }

  retornaObserv() : Observable<number> {
    let i = -1;
    
    return new Observable<number>( observer => {


      const intervalo = setInterval( () => {

        i++;
        observer.next(i);

        if( i === 4 ){
          clearInterval( intervalo );
          observer.complete();
        }

        if( i === 2 ){
          observer.error("i llegó al 2");
        }

      }, 1000 );

    } );

  }

}
