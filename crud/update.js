import express from "express"
import {updateUser} from '../utils/index.js'
const DATA_FILE = 'data.json'

export default express.Router()
.patch('/:id', (req, res) => {
    const id = parseInt(req.params.id)
    const userData = req.body
    const {data, success} = updateUser(parseInt(id), userData, DATA_FILE)

    if(!success){
        res.status(404).json({msg: 'User not found'})
        return
    }
    console.log('User updated successfully', data)
    res.status(201).json({user: data})
})