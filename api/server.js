import 'dotenv/config'
import cors from 'cors'
import 'express-async-errors'
import express from 'express'
const app = express()

import connectDB from './db.js'
import dashboardRouter from './router/dashboard.js'
import userRouter from './router/user.js'
import productRouter from './router/products.js'

app.use(express.json())
app.use(cors())

app.get('/',(req,res)=>{
	res.send("Hello from jenny-api")
})

app.use('/api/dashboard',dashboardRouter)
app.use('/api/user', userRouter)
app.use('/api/product', productRouter)

const PORT = process.env.PORT || 5000

const start = async () =>{
	try {
		console.log("Trying to connect to AtlasDb...")
		await connectDB(process.env.MONGO_URI)
		app.listen(PORT,()=>{
			console.log('Server is listening at port 5000..')
		})
	} catch (error) {
		console.log(error)
	}
}

start()

