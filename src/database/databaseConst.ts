//
// import { getDatabase, ref, child, get } from "firebase";
//
// const dbRef = ref(getDatabase());
// get(child(dbRef, `users/${userId}`)).then((snapshot) => {
//     if (snapshot.exists()) {
//         console.log(snapshot.val());
//     } else {
//         console.log("No data available");
//     }
// }).catch((error) => {
//     console.error(error);
// });


import {database} from "../index";




export interface WorkoutTask {
    id: number,
    name: string,
    img: string
}

export const getData = (setter: (data: Array<WorkoutTask>) => {}) => {
    fetch('https://workouts-project-default-rtdb.firebaseio.com/data.json')
        .then(res => res.json())
        .then(data => {
            const dataArray: Array<WorkoutTask> = []

            for (let key in data) {
                const obj: WorkoutTask = {
                    id: data[key].id,
                    name: data[key].name,
                    img: data[key].img
                }

                dataArray.push(obj)
            }

            setter(dataArray)
        })
        .catch(errorMessage => console.error(errorMessage))
}

export interface AddData {
    date: number,
    workoutIsDone: boolean
}

const addData = (tableName: string, data: AddData) => {
    fetch(`https://workouts-project-default-rtdb.firebaseio.com/${tableName}.json`, {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json'
        }
    })
        .then(res => res.json())
        .then(data => {console.log(data)})
        .catch(errorMessage => console.error(errorMessage))
}


const DBTables: any = {
    WeightStatistics: 'weight-statistics',
    WorkoutStatics: 'workout-statics',
}



// export const addWeightStatisticsData = (data) => {
//
//     // TODO: validate
//
//     addData(DBTables.WeightStatistics, data)
// }

export const addWorkoutStatisticsData = (data: AddData) => {

    // TODO: validate

    addData(DBTables.WorkoutStatics, data)
}


export const saveWorkouts = (workouts: Array<WorkoutTask>) => {

}

export interface  IUserCreateDto {
    name: string
    age: number
    sex: string
    weight: number
    height: number
    workoutCount: number
    workoutTime: number
    groupTitle: string
}

export const createUser = (userCreateDto: IUserCreateDto) => {
    const tableName = 'user'

    fetch(`https://workouts-project-default-rtdb.firebaseio.com/${tableName}.json`, {
        method: 'POST',
        body: JSON.stringify(userCreateDto),
        headers: {
            'Content-Type': 'application/json'
        }
    })
        .then(res => res.json())
        .then(data => {console.log(data)})
        .catch(errorMessage => console.error(errorMessage))
}