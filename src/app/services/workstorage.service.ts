
import { Injectable } from '@angular/core';
import {Storage} from '@ionic/storage';
import {Item} from './storage.service';


// export interface Work {
//   day: string;
//   exercise: {
//     name: string,
//     sets: number,
//     reps: number,
//     weight: number
//   }[];
//   // completed: boolean;
// }

//try
export interface Work {
  id: number,
  day: string,
  exercise: string,
  modified: number
  //   name: string,
  //   sets: number,
  //   reps: number,
  //   weight: number
  // }[];
  // completed: boolean;
}

const WORKS_KEY = 'my-works';

@Injectable({
  providedIn: 'root'
})
export class WorkstorageService {

  constructor(private storage: Storage) { }

  // create
  addWork(work: Work): Promise<any> {
    return this.storage.get(WORKS_KEY).then((works: Work[]) => {
      if (works) {
        works.push(work);
        return this.storage.set(WORKS_KEY, works);
      } else {
        return this.storage.set(WORKS_KEY, [works]);
      }
    });
  }

  // READ
  getWorks(): Promise<Work[]> {
    return this.storage.get(WORKS_KEY);
  }

  // UPDATE
  // updateWork(work: Work): Promise<any> {
  //   return this.storage.get(WORKS_KEY).then((works: Work[]) => {
  //     if (!works || works.length === 0) {
  //       return null;
  //     }
  //
  //     let newWorks: Work[] = [];
  //
  //     for (let i of works) {
  //       if (i.id === item.id) {
  //         newItems.push(item);
  //       } else {
  //         newItems.push(i);
  //       }
  //     }
  //
  //     return this.storage.set(ITEMS_KEY, newItems);
  //   });
  // }
  deleteWork(id: number): Promise<Work> {
    return this.storage.get(WORKS_KEY).then((works: Work[]) => {
      if (!works || works.length === 0) {
        return null;
      }

      let toKeep1: Work[] = [];

      for (let i of works) {
        if (i.id !== id) {
          toKeep1.push(i);
        }
      }
      return this.storage.set(WORKS_KEY, toKeep1);
    });
  }

}

























// last working
// getExcercise() {
//   return[
//     {
//       day: 'monday',
//       exercise: [{
//         name: 'flat bench press',
//         sets: 3,
//         reps: 10,
//         weight: 35
//       },
//         {
//         name: 'inclined bench press',
//         sets: 3,
//         reps: 8,
//         weight: 30
//       }
//       ]
//       // ,
//       // completed: false
//     },
//     {
//       day: 'tuesday',
//       exercise: [{
//         name: 'leg press',
//         sets: 4,
//         reps: 8,
//         weight: 45
//       },
//         {
//           name: 'shoulder press',
//           sets: 3,
//           reps: 8,
//           weight: 20
//         },
//         {
//           name: 'shrugs',
//           sets: 3,
//           reps: 15,
//           weight: 20
//         },
//         {
//           name: 'inclined bench press',
//           sets: 3,
//           reps: 8,
//           weight: 30
//         }
//       ]
//       // ,
//       // completed: false
//     }
//   ];
// }
// end of last working
// getTodos() {
//   return [
//     {
//       id  : 1 ,
//       name : 'abhijit',
//       completed : true,
//     },
//     {
//       id  : 2 ,
//       name : 'yashwant',
//       completed : false,
//     },
//     {
//       id  : 3 ,
//       name : 'archana',
//       completed : false,
//     }
//   ];
// }

//   getExcercise() {
//     return[
//       // {
//       //   day : 'monday',
//       //   exercise: ['bench press' , 'bm', 'xc', 'sd', 'se'],
//       //   sets: [3, 3, 5, 6, 4],
//       //   reps: [8, 12, 8, 8, 10],
//       //   weights: [50, 20, 10, 30, 45],
//       //   completed: false,
//       // },
//       {
//         day : 'monday',
//         exercise: 'bench press',
//         sets: 3,
//         reps: 8,
//         weights: 50,
//         completed: false,
//       },
//       {
//         day : 'tuesday',
//         exercise: 'shoulder press',
//         sets: 3,
//         reps: 10,
//         weights: 20,
//         completed: false,
//       },
//       // {
//       //   day : 'wednesday',
//       //   exercise: 'rest day',
//       //   sets: 0,
//       //   reps: 0,
//       //   weights: 0,
//       //   completed: true,
//       // },
//       {
//         day : 'thursday',
//         exercise: 'dead lift',
//         sets: 3,
//         reps: 12,
//         weights: 45,
//         completed: false,
//       },
//       {
//         day : 'friday',
//         exercise: 'squats',
//         sets: 3,
//         reps: 10,
//         weights: 35,
//         completed: false,
//       }
//     ];
//   }
// }

