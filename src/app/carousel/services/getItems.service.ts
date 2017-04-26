import { Injectable } from '@angular/core' // good practice, but only required if the service injects other services with their own dependencies

@Injectable()
export class GetItemsService {
    getItems() {
        return ITEMS;
    }
}

const ITEMS = [
    {source: "http://placehold.it/350x150/d19c8a/d19c8a"},
    {source: "http://placehold.it/350x150/d1c887/d1c887"},
    {source: "http://placehold.it/350x150/a6d18a/a6d18a"},
    {source: "http://placehold.it/350x150/86d1b5/86d1b5"},
    {source: "http://placehold.it/350x150/d186c2/d186c2"}
]