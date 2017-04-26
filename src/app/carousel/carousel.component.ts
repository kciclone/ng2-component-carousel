import { Component, OnInit } from '@angular/core';

import { GetItemsService } from './services/getItems.service'

@Component({
  selector: 'carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css'],

  providers: [GetItemsService] // this could be set on the app module, but is not necessary because it's only needed in the carousel?
})
export class CarouselComponent implements OnInit {

  items:any[];
  selectedItem = 0;

  constructor(private getItemsService: GetItemsService) { // shorthand
    // this.items = this.getItemsService.getItems() // not a good idea to put potentially long running tasks in your constructor
    // although the constructor is empty it's still needed to inject the service 
  }

  // called on demand by Angular
  ngOnInit() {
    this.items = this.getItemsService.getItems()
  }

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
