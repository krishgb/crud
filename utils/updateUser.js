import {readData, writeData} from './index.js'

export const updateUser = (id, userData, file = 'data.json') => {
    const allUsers = readData(file)

    for(let i= 0; i < allUsers.length; i++)
        if (allUsers[i].id === id){
            allUsers[i] = {...allUsers[i], ...userData}
            writeData(file, allUsers)
            return {data: allUsers[i], success: true}
        }

    return {success: false}
}