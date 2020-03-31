import { Component, OnInit } from '@angular/core';
import { PRIMARY_OUTLET, Router, UrlSegment, UrlSegmentGroup, UrlTree } from '@angular/router';

@Component({
  selector: 'app-url-tree',
  templateUrl: './url-tree.component.html',
  styleUrls: [ './url-tree.component.scss' ]
})
export class UrlTreeComponent implements OnInit {

  tree: UrlTree;

  constructor(
    private router: Router
  ) {
    const tree = this.router.parseUrl('/team/33/(user/victor//support:help)?debug=true#fragment');
    const f = tree.fragment;
    const q = tree.queryParams;
    const g: UrlSegmentGroup = tree.root.children[ PRIMARY_OUTLET ];
    const s: UrlSegment[] = g.segments;
    console.log('f', f);
    console.log('q', q);
    console.log('g', g);
    console.log('s', s);
    console.log(g.children[ PRIMARY_OUTLET ].segments);
    console.log(g.children[ 'support' as any ].segments);
  }

  ngOnInit() {
  }

}
