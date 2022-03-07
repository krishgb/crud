import {readData} from './index.js'

export const filterUser = (key, value, file = 'data.json') => {
    const data = readData(file)
    return data.filter(user => String(user[key]).toLowerCase() === String(value).toLowerCase() )
}
