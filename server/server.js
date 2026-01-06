import 'dotenv/config'
import express from 'express'
import cors from 'cors'
import connectDB from './config/mongodb.js'
import userRouter from './routes/userRoutes.js'


//app config

const PORT = process.env.PORT || 4000
const app= express()
await connectDB()
//initialize middleware
app.use(express.json())
app.use(cors())

// api route

app.get ('/', (req, res)=> res.send("api is working"))
app.use('/api/user', userRouter)

app.listen(PORT, ()=>console.log("Server running on port" + PORT));

