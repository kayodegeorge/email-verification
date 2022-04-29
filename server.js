const connection = require("./db")
const user = require(',/routes/users')
const express = require('express')
const dotenv = require('dotenv').config()
 const port = process.env.PORT || 7000
const app = express()

(async () => await connection())()

app.use(express.json())
app.use("/api/user", user)

// wait
// app.get('/api/register', (req,res)=>{
// res.status(200).json({message:'signed up'})
// })



// app.use('/api/goals', require('./routes/goalRoutes'))
app.listen(port,()=>console.log(`server started on ${port}`))
