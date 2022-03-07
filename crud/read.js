import express from "express"
import {readData, filterUser} from '../utils/index.js'

const router = express.Router()

const DATA_FILE = 'data.json'

router.get('/:id', (req, res) => {
    const userID = parseInt(req.params.id)
    const data = filterUser('id', userID, DATA_FILE)
    console.log(data)
    res.json({data})
})


//  /getUser                    -> all users
//  /getUser/id=7               -> userid === 7
//  /getUser/id=4&gender=male   -> userid === 4 && gender === 'male'
router.get('/', (req, res) => {
    
    const queries = req.query
    let data = readData(DATA_FILE)

    for(let key of Object.keys(queries))
        data = data.filter(user =>  String(user[key]).toLowerCase() === queries[key])
    
    console.log(data)
    res.json({data})
})

export default router