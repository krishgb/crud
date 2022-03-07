import {readData, writeData, filterUser} from './index.js'

export const deleteUser = (id, file = 'data.json') => {
    const user = filterUser('id', id, file)
    if(user.length){
        const newUsers = [...readData(file)].filter(user => user.id !== id)
        writeData(file, newUsers)
        return {user, success: true}

    }
    return {success: false}
}