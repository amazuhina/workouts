import {data, Workout} from "../database/database";
import {IWorkoutCard} from "../redux/workout-month-plan.slice";




const countLessons = (workoutTime: number) => {
    switch (workoutTime) {
        case 30: return 6
        case 45: return 7
        case 60: return 8
    }

    console.error('WorkoutTime is not correct')
    return 0
}

export const generationLessonTitle = (workoutTime: number, groupTitle: string) => {
    // Получение данных из БД
    const workoutExs: Array<Workout> = data
        .filter(i => i.groupTitle === groupTitle)
        // @ts-ignore
        .shuffle()


    console.log(data)
    console.log(workoutTime)
    console.log(groupTitle)
    console.log(workoutExs)

    const workoutExCount = countLessons(workoutTime)

    const actualExs: Array<IWorkoutCard> = workoutExs
        .slice(0, workoutExCount)
        .map(i => ({title: i.text}))

    return actualExs
}