import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-style-helper',
  template: '',
  styleUrls: ['./style-helper.component.scss', './style-helper-position.scss', './style-helper-flex.scss'],
  encapsulation: ViewEncapsulation.None
})
export class StyleHelperComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
