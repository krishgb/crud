import express from 'express'

import createUser from './crud/create.js'
import deleteUser from './crud/delete.js'
import filterUser from './crud/read.js'
import updateUser from './crud/update.js'


const PORT = 8000

const app = express()
app.use(express.json())


app.use('/create', createUser)
app.use('/getUser', filterUser)
app.use('/update', updateUser)
app.use('/delete', deleteUser)


app.listen(PORT, console.log(`Server running on port ${PORT}`))