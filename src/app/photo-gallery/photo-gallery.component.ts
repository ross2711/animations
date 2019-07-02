import { Component, OnInit } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';

@Component({
  selector: 'app-photo-gallery',
  templateUrl: './photo-gallery.component.html',
  styleUrls: ['./photo-gallery.component.css'],
  animations: [
    trigger('photoState', [
      state(
        'move',
        style({
          transform: 'translateX(150%)'
        })
      ),
      state(
        'enlarge',
        style({
          transform: 'scale(1.5)'
        })
      ),
      state(
        'spin',
        style({
          transform: 'rotateY(180deg) rotateZ(90deg)'
        })
      ),
      transition('* => *', animate('500ms ease'))
    ])
  ]
})
export class PhotoGalleryComponent implements OnInit {
  constructor() {}
  position: string;
  photoUrl =
    'https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/Flag_of_Scotland.svg/2000px-Flag_of_Scotland.svg.png';

  changePosition(newPosition: string) {
    this.position = newPosition;
  }

  ngOnInit() {}
}
