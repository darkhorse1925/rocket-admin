import mongoose from 'mongoose'

const productSchema  = new mongoose.Schema({
	name: String,
	desc: String,
	price: Number,
	img: String,
	owner:{
			type: mongoose.Schema.Types.ObjectId,
			ref: 'User'
		}
	
},{timestamps: true})

export default mongoose.model("Products", productSchema)

