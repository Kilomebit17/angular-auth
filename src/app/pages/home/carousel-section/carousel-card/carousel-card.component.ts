import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-carousel-card',
  templateUrl: './carousel-card.component.html',
  styleUrls: ['./carousel-card.component.scss']
})
export class CarouselCardComponent implements OnInit {
  @Input() img:string
  @Input() description:string
  constructor() { }

  ngOnInit(): void {
  }

}
