import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pop-over',
  templateUrl: './pop-over.component.html',
  styleUrls: ['./pop-over.component.css']
})
export class PopOverComponent implements OnInit {
  show = false;
  constructor() {}

  get stateName() {
    return this.show ? 'show' : 'hide';
  }

  toggle() {
    this.show = !this.show;
  }

  ngOnInit() {}
}
