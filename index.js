import express from "express"
import {filterUser, createUser, updateUser, deleteUser} from './utils.js'

const PORT = 8000
const DATA_FILE = 'data.json'

const app = express()
app.use(express.json())


//  /getUser/7 -> userid === 7
app.get('/getUser/:id', (req, res) => {
    const userID = parseInt(req.params.id)
    const data = filterUser('id', userID, DATA_FILE)
    console.log(data)
    res.json({data})
})


//  /getUser                    -> all users
//  /getUser/id=7               -> userid === 7
//  /getUser/id=4&gender=male   -> userid === 4 && gender === 'male'
app.get('/getUser', (req, res) => {
    
    const queries = req.query

    let data = filterUser()

    for(let key of Object.keys(queries))
        data = data.filter(user =>  String(user[key]).toLowerCase() === queries[key])
    
    console.log(data)
    res.json({data})
})





app.post('/create', (req, res) => {

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





app.patch('/update/:id', (req, res) => {
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





app.delete('/delete/:id', (req, res) => {
    const id = parseInt(req.params.id)
    const {user, success} = deleteUser(id)

    if(!success){
        res.status(404).json({msg: 'User not found'})
        return
    }
    console.log('User deleted successfully', user)
    res.status(200).json({user})
})

app.listen(PORT, console.log(`Server running on port ${PORT}`))