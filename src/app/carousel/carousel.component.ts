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
import { CarouselItem } from './carousel.types';

@Component({
  selector: 'carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush // only re-render component if inputs have changed, see https://blog.thoughtram.io/angular/2016/02/22/angular-2-change-detection-explained.html
})
export class CarouselComponent {

  // see https://angular.io/docs/ts/latest/cookbook/component-communication.html
  @Input() items: CarouselItem[] = []; // expect an array of CarouselItems from the parent component
  @Output() move = new EventEmitter(); // expose an event handler to the parent

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
