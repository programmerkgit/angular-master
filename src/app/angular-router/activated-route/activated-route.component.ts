import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-activated-route',
  templateUrl: './activated-route.component.html',
  styleUrls: [ './activated-route.component.scss' ]
})
export class ActivatedRouteComponent implements OnInit {

  queryParams: string;
  params: string;
  keys: string[];

  constructor(
    private activatedRoute: ActivatedRoute
  ) {
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      /* use paramMap */
      this.params = JSON.stringify(params);
    });
    this.activatedRoute.queryParams.subscribe(params => {
      /* use queryParamMap */
      this.queryParams = JSON.stringify(params);
    });
    this.activatedRoute.queryParamMap.subscribe(params => {
      this.keys = params.keys;
    });
  }

}
