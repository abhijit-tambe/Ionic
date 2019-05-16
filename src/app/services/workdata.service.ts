import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WorkdataService {

  constructor() {
  }

  getExcercise() {
    return[
      {
        day: 'monday',
        exercise: [{
          name: 'flat bench press',
          sets: 3,
          reps: 10,
          weight: 35
        },
          {
          name: 'inclined bench press',
          sets: 3,
          reps: 8,
          weight: 30
        }
        ],
        completed: false
      },
      {
        day: 'tuesday',
        exercise: [{
          name: 'leg press',
          sets: 4,
          reps: 8,
          weight: 45
        },
          {
            name: 'shoulder press',
            sets: 3,
            reps: 8,
            weight: 20
          },
          {
            name: 'shrugs',
            sets: 3,
            reps: 15,
            weight: 20
          },
          {
            name: 'inclined bench press',
            sets: 3,
            reps: 8,
            weight: 30
          }
        ],
        completed: false
      }
    ];
  }
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
}
