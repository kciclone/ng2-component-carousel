import { Component } from '@angular/core';

@Component({
  selector: 'carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent {

  items = [
    {source: "http://placehold.it/350x150/d19c8a/d19c8a"},
    {source: "http://placehold.it/350x150/d1c887/d1c887"},
    {source: "http://placehold.it/350x150/a6d18a/a6d18a"},
    {source: "http://placehold.it/350x150/86d1b5/86d1b5"},
    {source: "http://placehold.it/350x150/d186c2/d186c2"}
  ]
}
