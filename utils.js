import {readFileSync, writeFileSync} from 'fs'

const readData = file => JSON.parse(readFileSync(file, {flag: 'r'}).toString())

const writeData = (file, data) => {writeFileSync(file, JSON.stringify(data))}

export const filterUser = (key, value, file = 'data.json') => {
    const data = readData(file)
    return data.filter(user => String(user[key]).toLowerCase() === String(value).toLowerCase() )
}

export const createUser = (userData, file = 'data.json') => {
    const data = readData(file)
    data.push(userData)
    writeData(file, data)
}

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

export const deleteUser = (id, file = 'data.json') => {
    const user = filterUser('id', id, file)
    if(user.length){
        const newUsers = [...readData(file)].filter(user => user.id !== id)
        writeData(file, newUsers)
        return {user, success: true}

    }
    return {success: false}
}