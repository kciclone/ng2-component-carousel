import { Component } from '@angular/core';

@Component({
  selector: 'carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent {

  carouselItems = [
    {id: 1, content: "Item 1"},
    {id: 2, content: "Item 2"},
    {id: 3, content: "Item 3"},
    {id: 4, content: "Item 4"},
    {id: 5, content: "Item 5"}
  ]
}
