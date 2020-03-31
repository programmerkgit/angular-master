import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-router-link',
  templateUrl: './router-link.component.html',
  styleUrls: [ './router-link.component.scss' ]
})
export class RouterLinkComponent implements OnInit {

  keys: string[];

  constructor(
    private activatedRoute: ActivatedRoute
  ) {
  }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(params => {
      this.keys = params.keys;
    });
  }

}
