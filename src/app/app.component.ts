import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular2 Carousel component';


  public items = [
    {source: "http://placehold.it/350x150/d19c8a/d19c8a"},
    {source: "http://placehold.it/350x150/d1c887/d1c887"},
    {source: "http://placehold.it/350x150/a6d18a/a6d18a"},
    {source: "http://placehold.it/350x150/86d1b5/86d1b5"},
    {source: "http://placehold.it/350x150/d186c2/d186c2"}
  ];

  public pushItem() {
    this.items = [].concat(...this.items, {source: "http://placehold.it/350x150/d19c8a/d19c8a"});
    // overwrite the items array so the change detection is triggered even when onPush
    // from left to right: create a new array, concat the spreaded items (i.e. each item individually), add a new item
  }

  public moved(item) {
    console.debug(item);
  }
}
