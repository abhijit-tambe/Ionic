import { Injectable } from '@angular/core';
import {Storage} from '@ionic/storage';
import {promise} from 'selenium-webdriver';
// import { Observable } from "rxjs/Rx";
import {Observable} from 'rxjs';

export interface Item {
  id: number;
  // title: string;
  // value: string;
  // days: string;
  // exercise: {
    name: string;
   sets: number;
    reps: number;
  weight: number;
  completed: boolean;
// };
  modified: number;
}

const ITEMS_KEY = 'my-items';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor(private storage: Storage) { }

  // CREATE
  addItem(item: Item): Promise<any> {
    return this.storage.get(ITEMS_KEY).then((items: Item[]) => {
      if (items) {
        items.push(item);
        return this.storage.set(ITEMS_KEY, items);
      } else {
        return this.storage.set(ITEMS_KEY, [item]);
      }
    });
  }

  // READ
  getItems(): Promise<Item[]> {
    return this.storage.get(ITEMS_KEY);
  }

  // UPDATE
  updateItem(item: Item): Promise<any> {
    return this.storage.get(ITEMS_KEY).then((items: Item[]) => {
      if (!items || items.length === 0) {
        return null;
      }

      let newItems: Item[] = [];

      for (let i of items) {
        if (i.id === item.id) {
          newItems.push(item);
        } else {
          newItems.push(i);
        }
      }

      return this.storage.set(ITEMS_KEY, newItems);
    });
  }

  // DELETE
  deleteItem(id: number): Promise<Item> {
    return this.storage.get(ITEMS_KEY).then((items: Item[]) => {
      if (!items || items.length === 0) {
        return null;
      }

      let toKeep: Item[] = [];

      for (let i of items) {
        if (i.id !== id) {
          toKeep.push(i);
        }
      }
      return this.storage.set(ITEMS_KEY, toKeep);
    });
  }
}

















// export interface Item {
//   id: number,
//   title: string,
//   value: string,
//   modified: number
// }
// const ITEMS_KEY = 'my-items';
//
// @Injectable({
//   providedIn: 'root'
// })
// export class StorageService {
//
//   constructor(private storage: Storage) { }
// // add
//   addItem(item: Item): Promise<any> {
//   return this.storage.get(ITEMS_KEY).then((items: Item[]) => {
//     if (items) {
//       item.push(item);
//       return this.storage.set(ITEMS_KEY, [items]);
//     } else {
//       return this.storage.set(ITEMS_KEY, [items]);
//
//     }
//   });
//   }
//  // read
//   getItems(): Promise<Item[]> {
//     return this.storage.set(ITEMS_KEY);
//   }
//   // update
//   updateItem(item: Item) : Promise<any> {
//     return this.storage.get(ITEMS_KEY).then((items: Item[]) => {
//       if (!items || items.length === 0) {
//         return null;
//       }
//       let newItems: Item[] = [];
//       for (let i of items) {
//         if (i.id === item.id) {
//           newItems.push(item);
//         } else {
//           newItems.push(i);
//         }
//       }
//       return this.storage.set(ITEMS_KEY , newItems);
//     });
//   }
//   // Delete
//   deleteItem(id: number): promise<Item> {
//     return this.storage.get(ITEMS_KEY).then((items: Item[]) => {
//       if (!items || items.length === 0) {
//         return null;
//       }
//       let toKeep: Item[] = [];
//       for (let i of items) {
//         if (i.id !== items.id) {
//           toKeep.push(i);
//         }
//       }
//       return this.storage.set(ITEMS_KEY, toKeep);
//     });
//   }
// }
