import {readData, writeData} from './index.js'

export const createUser = (userData, file = 'data.json') => {
    const data = readData(file)
    data.push(userData)
    writeData(file, data)
}