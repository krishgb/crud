import {Router} from "express"
import {deleteUser} from '../utils/index.js'
const DATA_FILE = 'data.json'

export default Router()
.delete('/:id', (req, res) => {
    const id = parseInt(req.params.id)
    const {user, success} = deleteUser(id, DATA_FILE)

    if(!success){
        res.status(404).json({msg: 'User not found'})
        return
    }
    console.log('User deleted successfully', user)
    res.status(200).json({user})
})