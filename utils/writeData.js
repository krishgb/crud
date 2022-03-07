import {writeFileSync} from 'fs'

export const writeData = (file, data) => {writeFileSync(file, JSON.stringify(data))}