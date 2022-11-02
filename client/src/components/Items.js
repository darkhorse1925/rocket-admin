import styled from 'styled-components'
import ToggleSwitch from './Togswitch.js'
import {useState} from 'react'
import axios from 'axios'
import yt from '../assets/yt.svg'
import gle from '../assets/google.svg'
import fb from '../assets/fb.svg'
import trash from '../assets/trash.svg'
import pencil from '../assets/edit-2.svg'
import userRequest from '../requestMethods.js'

/*start*/
const Items = ({item:
	{_id,name,clicks,budget,location,status,endDate,createdAt,startDate,platform}}) => {

	const [toggle, setToggle] = useState(status === "Live now")
	const [color, setColor] = useState(status)
	const URL = 'http://3.108.56.34:8080'

	function timestamp(date) {
		const monthNames = 
			["Jan", "Feb", "Mar", "Apr" , "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
		const day = date.getDate();
		const monthIndex = date.getMonth();
		const monthName = monthNames[monthIndex];
		const year = date.getFullYear();
		return `${day} ${monthName} ${year}`;  
	}
	
	function handleChange(e) {
	 if(color=== "Live now") {
		 setToggle(e.target.checked)
		 updateStatus("Paused",e)
	 }
	 if(color === "Paused") {
		 setToggle(e.target.checked)
		 updateStatus("Live now",e)
	 }

	async function updateStatus(stat) {
		 try {
			 const res = await axios.put(`${URL}/api/dashboard`, {stat, _id})
			 setColor(stat)
			 console.log(res.data)
		 } catch (err) {
			 console.log(err)
		 }
	 }
	}
	
	async function deletehandler() {
		try {
			const res = await userRequest.delete("/", {data:{_id}})
			window.location.reload()
			console.log(res.data)
		} catch (err) {
			console.log(err)
		}
	}

	return (
		<Row>
			<Data>
				<Box type="checkbox"/>
			</Data>
			<Data>
				<ToggleSwitch onChange={handleChange} toggle={toggle} />
			</Data>
			<Data>
				<Name>{name}</Name>
				<CreatedOn>Created on {timestamp(new Date(createdAt))}</CreatedOn>
			</Data>
			<Data>{timestamp(new Date(startDate))+" - "+timestamp(new Date(endDate))}</Data>
			<Data>{clicks}</Data>
			<Data>INR {budget}</Data>
			<Data>{location}</Data>
			<Data>
				{platform === "facebook" && <img src={fb} alt="facebook"/>}
				{platform === "google" && <img src={gle} alt="google"/>}
				{platform === "youtube" && <img src={yt} alt="youtube"/>}
			</Data>
			<Data>
				{ color === "Live now" && <ColorGreen>{color}</ColorGreen> }
				{ color === "Paused" && <ColorYellow>{color}</ColorYellow> }
				{ color === "Exhausted" && <ColorRed>{color}</ColorRed> }
			</Data>
			<Data>
				<Edit src={pencil}/>
				<Delete src={trash} onClick={deletehandler}/>
			</Data>
		</Row>
	)
}

/*Style*/
const Row = styled.tr`
`

const Data = styled.td`
	text-align: center;
	border-bottom: 1px solid var(--grey-3);
	padding: 0.5rem;
	font-size: 14px;
`

const Box = styled.input`
`

const Name = styled.p`
	font-weight: bold;
	margin-bottom: 0.1rem;
`

const CreatedOn= styled.p`
	font-size: 12px;
	color:rgba(0,0,0,0.6);
	margin: 0;
`

const ColorGreen= styled.div`
	background: #e1ffe0;
	color: #317c2e;
	padding: 0.1rem;
	border-radius: 5px;
`
const ColorRed= styled.div`
	background: #ffdede;
	color: #fc3f3f;
	padding: 0.1rem;
	border-radius: 5px;
`
const ColorYellow= styled.div`
	background: #FFF8E0;
	color: #D1A307;
	padding: 0.1rem;
	border-radius: 5px;
`
const Edit= styled.img`
	margin-right: 0.5rem
	cursor: pointer;
`

const Delete= styled.img`
	cursor: pointer;
`

export default Items
