import express from 'express'
const router  = express.Router()


import User from '../models/user.js'
import Camp from '../models/campaigns.js'

/*FETCH CAMPAIGN*/
router.get('/:id' , async(req,res) => {
	const user  = await User.findById(req.params.id)
	 
	const promises = user.campaigns.map((c) => {
		const camp = Camp.findById(c)
		return camp
	})
	const userCampaigns = await Promise.all(promises)
	res.json(userCampaigns)
})

/*CREATE CAMPAIGN*/
//todo jwt auth , remove params
router.post('/:id' , async (req,res) => {
	console.log(req.body)
	console.log(req.params)
	const campaign = await Camp.create(req.body)
	const user = await User.findByIdAndUpdate(req.params.id,
		{$push: {"campaigns": campaign._id}},
		{new: true}
	)
	console.log(user)
	res.json(campaign)
})

/*UPDATE CAMPAIGN*/
router.put('/',async(req,res)=>{
	console.log(req.body)
	const id = req.body._id
	const camp = await Camp.findByIdAndUpdate(id,
		{"status": req.body.stat},
		{new: true}
	)
	res.json(camp)
})

/*DELETECAMPAIGN*/
router.delete('/:id',async(req,res)=>{
	console.log(req.body)
	const id = req.body._id
	const userId= req.params.id
	//const camp = await Camp.findByIdAndDelete(id)
	const user = await User.findByIdAndUpdate(userId,
		{$pull: {"campaigns": id}},
		{new: true}
	)
	console.log(user)
	res.status(200).json("Deleted")
})

export default router
