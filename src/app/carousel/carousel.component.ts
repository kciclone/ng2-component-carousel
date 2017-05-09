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
import * as get from 'lodash/get';

import { CarouselItem } from './carousel.types';

@Component({
  selector: 'carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush // only re-render component if inputs have changed, see https://blog.thoughtram.io/angular/2016/02/22/angular-2-change-detection-explained.html
})
export class CarouselComponent implements OnInit, OnChanges {
  // see https://angular.io/docs/ts/latest/cookbook/component-communication.html
  @Input() items: CarouselItem[] = []; // expect an array of CarouselItems from the parent component
  @Output() move = new EventEmitter(); // expose an event handler to the parent

  // see first 2 answers (docs are missing) http://stackoverflow.com/questions/37965647/hostbinding-and-hostlistener-what-do-they-do-and-what-are-they-for
  @HostBinding('class.carousel-container') carouselContainerClass = true; // set a class on the host element (carousel)

  public selectedItem = 0;
  public itemWidth = '';
  public totalWidth = '';
  public position = '';

  // see https://angular.io/docs/ts/latest/guide/lifecycle-hooks.html for more info on lifecycle hooks

  // do something the first time the component renders
  ngOnInit() {
    this.totalWidth = `${100 * this.items.length}%`;
    this.itemWidth = `${100 / this.items.length}%`;
    this.setPosition();
  }

  // do something when the input changes
  ngOnChanges(changes: SimpleChanges) {
    const newItems = get(changes, 'items.newValue', null);

    if (newItems) {
      this.totalWidth = `${100 * this.items.length}%`;
      this.itemWidth = `${100 / this.items.length}%`;
    }
  }

  public setPosition(){
    // see https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Template_literals
    this.position = `-${this.selectedItem * 100}%`;
  }

  public setItem(index: number): void {
    this.selectedItem = index;
    this.setPosition();
    this.move.emit(this.selectedItem); // emit the move event, see https://toddmotto.com/component-events-event-emitter-output-angular-2
  }

  public moveItem(factor: number = 0): void {
    const newIndex = this.selectedItem + factor;

    if (newIndex < 0 || newIndex === this.items.length) {
      return;
    }

    this.setItem(newIndex);
  }
}
