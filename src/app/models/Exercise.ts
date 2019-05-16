export class Exercise {
    day: string;
    exercise: {
        name: string,
        sets: number,
        reps: number,
        weight: number
    }[];
    completed: boolean;
}
