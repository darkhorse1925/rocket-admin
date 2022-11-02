import express from 'express'
import Products from '../models/products.js'
const router  = express.Router()

router.get('/' , async(req,res) => {
	const product = await Products.find()
	res.json(product)
})

router.post('/' , async(req,res) => {
	console.log(req.body)
	const product= await Products.create(req.body)
	res.json(product)
})


export default router
