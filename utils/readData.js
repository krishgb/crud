import {readFileSync, existsSync, writeFileSync} from 'fs'

export const readData = file => {
    if (!existsSync(file)){
        writeFileSync(file, JSON.stringify([]))
        return []
    }
    const data = readFileSync(file, {flag: 'r'})
    if (!data.length) return []
    return JSON.parse(data.toString())
}
