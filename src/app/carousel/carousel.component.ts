import { Component } from '@angular/core';

@Component({
  selector: 'carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent {

  items = [
    {id: 0, source: "http://placehold.it/350x150/d19c8a/d19c8a"},
    {id: 1, source: "http://placehold.it/350x150/d1c887/d1c887"},
    {id: 2, source: "http://placehold.it/350x150/a6d18a/a6d18a"},
    {id: 3, source: "http://placehold.it/350x150/86d1b5/86d1b5"},
    {id: 4, source: "http://placehold.it/350x150/d186c2/d186c2"}
  ]

  public currentItemId = 0;
  

  public setPosition(){
    let positionValue = 1;
    let parsedPositionValue = "";
    positionValue = positionValue * this.currentItemId*100;
    parsedPositionValue = "-" + positionValue + "%";
    console.log("setPosition parsedPositionValue executed:" + parsedPositionValue);
    return parsedPositionValue;
  }


  public setItem = (item) => {
    // let a = item.indexOf(this.currentItem );
    if (this.currentItemId === item.id) return;
    this.currentItemId = item.id;
    console.log("setItem currentItemId executed:" + this.currentItemId);
    return this.currentItemId;
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
