import {readFileSync} from 'fs'

export const readData = file => JSON.parse(readFileSync(file, {flag: 'r'}).toString())
