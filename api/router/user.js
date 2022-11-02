import express from 'express'
import User from '../models/user.js'
const router  = express.Router()

router.get('/' , async(req,res) => {
	const user  = await User.find()
	res.json({user})
})

router.post('/' , async(req,res) => {
	console.log(req.body)
	const user  = await User.create(req.body)
	res.json({user})
})


export default router
