import mongoose from 'mongoose'

const userSchema  = new mongoose.Schema({
	name: String,
	email: String,
	password: String,
	campaigns: [
		{
			type: mongoose.Schema.Types.ObjectId,
			ref: 'Campaigns'
		}
	]
},{timestamps: true})

export default mongoose.model("User", userSchema)
