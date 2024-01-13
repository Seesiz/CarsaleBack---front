// src/app/services/generic.service.ts

import { Injectable } from "@angular/core";

interface WithId<T> {
  id: T;
}

@Injectable({
  providedIn: 'root'
})
export class GenericService<T extends WithId<number> | {}> {
  private items: T[] = [];

  constructor() { }

  getAllItems(): T[] {
    return this.items;
  }

  addItem(item: T) {
    this.items.push(item);
  }

  updateItem(updatedItem: T) {
    if ('id' in updatedItem) {
      const index = this.items.findIndex((item) => (item as WithId<number>).id === (updatedItem as WithId<number>).id);
      if (index !== -1) {
        this.items[index] = updatedItem;
      }
    }
  }

  deleteItem(itemId: number) {
    this.items = this.items.filter((item) => {
      if ('id' in item) {
        return (item as WithId<number>).id !== itemId;
      }
      return true;
    });
  }
}
