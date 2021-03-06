import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-router-event',
  templateUrl: './router-event.component.html',
  styleUrls: [ './router-event.component.scss' ]
})
export class RouterEventComponent implements OnInit, OnDestroy {

  subscriptions: Subscription[] = [];

  constructor(
    private router: Router
  ) {
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(subscription => {
      subscription.unsubscribe();
    });
  }

  ngOnInit() {
    /* subscribe when navigate to another route */
    this.subscriptions.push(this.router.events.subscribe(e => {
      console.log(e);
    }));
  }

}
