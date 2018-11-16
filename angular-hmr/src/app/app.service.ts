import { Injectable } from "@angular/core";

@Injectable()
export class AppService {

    public items = [];

    constructor() {
        this.items = ["Apple", "Banana", "Orange", "Mango"];
    }

    getItems() {
        return this.items;
    }

    saveItem(value: string) {
        this.items.push(value);
    }
}