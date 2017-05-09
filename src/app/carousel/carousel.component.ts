import {
  Component,
  HostBinding,
  Input,
  Output,
  EventEmitter,
  ChangeDetectionStrategy,
  OnInit,
  OnChanges,
  SimpleChanges
} from '@angular/core';

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
  // see first 2 answers (docs are missing) http://stackoverflow.com/questions/37965647/hostbinding-and-hostlistener-what-do-they-do-and-what-are-they-for
  @HostBinding('class.carousel-container') carouselContainerClass = true; // set a class on the host element (carousel)

  selectedItem = 0;
  

  public setPosition(){
    let positionValue = 1;
    let parsedPositionValue = "";
    positionValue = positionValue * this.selectedItem*100;
    parsedPositionValue = "-" + positionValue + "%";
    return parsedPositionValue;
  }


  public setItem = (index) => {
    if (this.selectedItem === index) return;
    this.selectedItem = index;
    return  this.selectedItem;
  }
  public next(){
    if (this.selectedItem === this.items.length - 1) return;
    this.selectedItem = this.selectedItem + 1;
    return this.selectedItem;
  }

  public previous(){
    if (this.selectedItem === 0) return;
    this.selectedItem = this.selectedItem - 1;
    return this.selectedItem;
  }

  public getPanesWidth() {
    let baseWidth = 100;
    let newWidth = '';
    baseWidth = baseWidth * this.items.length;
    newWidth = baseWidth + '%';
    return newWidth;
  }

  public getLiWidth() {
    let baseWidth = 100;
    let newWidth = '';
    baseWidth = baseWidth / this.items.length;
    newWidth = baseWidth + '%';
    return newWidth;
  }   
}
