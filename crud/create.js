import express from "express"
import {filterUser, createUser} from '../utils/index.js'
const DATA_FILE = 'data.json'

export default express.Router()
.post('/', (req, res) => {

    const data = req.body
    const isExists = filterUser('id', data.id, DATA_FILE)
    
    if(isExists.length){
        res.status(401).json({msg: 'Data already exists'})
        return      
    }
    createUser(data, DATA_FILE)
    console.log('User created successfully')
    res.status(201).json({msg: 'created'})
})