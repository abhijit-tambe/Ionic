import { Injectable } from '@angular/core';
import {Storage} from '@ionic/storage';
import {Item} from './storage.service';



export interface Diet {
  id: number;
  // title: string;
  // value: string;
  // days: string;
  // exercise: {
  pro: string;
  carb: number;
  fat: number;
  cal: number;
  unit: boolean;
  completed: boolean;
// };
  modified: number;
}

const DIET_KEY = 'my-diets';
@Injectable({
  providedIn: 'root'
})
export class DietService {

  constructor(private storage1: Storage) { }

  // CREATE
  addDiet(diet: Diet): Promise<any> {
    return this.storage1.get(DIET_KEY).then((diets: Diet[]) => {
      if (diets) {
        diets.push(diet);
        return this.storage1.set(DIET_KEY, diets);
      } else {
        return this.storage1.set(DIET_KEY, [diet]);
      }
    });
  }


  // READ
  getDiets(): Promise<Diet[]> {
    return this.storage1.get(DIET_KEY);
  }

  // DELETE
  deleteDiet(id: number): Promise<Diet> {
    return this.storage1.get(DIET_KEY).then((diets: Diet[]) => {
      if (!diets || diets.length === 0) {
        return null;
      }

      let toKeep1: Diet[] = [];

      for (let i of diets) {
        if (i.id !== id) {
          toKeep1.push(i);
        }
      }
      return this.storage1.set(DIET_KEY, toKeep1);
    });
  }
}
