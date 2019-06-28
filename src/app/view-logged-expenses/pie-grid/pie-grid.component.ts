import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-pie-grid',
  templateUrl: './pie-grid.component.html',
  styleUrls: ['./pie-grid.component.less']
})
export class PieGridComponent implements OnInit {
  @Input() data: any[];

  constructor() { }

  ngOnInit() {
  }

}
