import { Component, OnInit, ChangeDetectionStrategy, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-scroller',
  templateUrl: './scroller.component.html',encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['./scroller.component.css']
})
export class ScrollerComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  items = Array.from({length: 100000}).map((_, i) => `Item #${i}`);

  

}
