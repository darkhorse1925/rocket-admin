import mongoose from 'mongoose'

const campaignSchema  = new mongoose.Schema({
	name: String,
	clicks: {
		type: Number,
		default: 0
	},
	budget: {
		type: Number,
		default: 1000
	},
	location: {
		type: String,
		default: "India"
	},
	platform: {
		type: String,
		enum :{
			values: ['google', 'facebook', 'youtube', 'instagram'],
			message: 'type not supported'
		}
	},
	status: {
		type: String,
		default: "Live now",
		enum: {
			values: ['Live now', 'Paused', 'Exhausted'],
			message: 'type not supported'
		}
	},
	createdAt: {
		type: Date,
		default: Date.now()
	},
	startDate: {
		type: Date,
		default: Date.now()
	},
	endDate: {
		type: Date,
		default: Date.now() + (7*24*60*60*1000)
	}
})

export default mongoose.model('Campaign', campaignSchema)
