import styled from 'styled-components'
import {useState, useContext, useEffect} from 'react'
import {Link} from 'react-router-dom'

import Navbar from './Nav.js'
import Header from './Header.js'
import Items from './Items.js'
import ItemContext from '../context/ItemsContext.js'


/*START*/
const Dashboard = () =>{
	let {userData} = useContext(ItemContext)

	let [sortData, setSortData] = useState(userData)

	useEffect(()=> {
		setSortData(userData)
	},[userData])

	function handlePlatform (e) {
		let platform = userData
		if(e.target.value ===  "all") {
			setSortData(userData)
		} else {
			platform = platform.filter(s => s.platform === e.target.value)
			setSortData(platform)
		}
	}

	function handleStatus (e) {
		let status = userData
		if(e.target.value ===  "all") {
			setSortData(userData)
		} else {
			status = status.filter(s => s.status === e.target.value)
			setSortData(status)
		}
	}

	return(
		<div>
			<Header />
			<Navbar />
			<Container>

				<Banner>
					<Heading>
						<BannerTitle>Your Campaigns</BannerTitle>
						<BannerText>Check the list of campaigns you created</BannerText>
					</Heading>
					<Link to ={`/firststep`}>
						<CreateBtn>Create new campaign</CreateBtn>
					</Link>
				</Banner>

				<Board>
					<Action>
						<Search type="text" placeholder="Search for the campaign"/>
						<Wrapper>
							<UtilText>Platform:</UtilText>
							<DropDown name="platform" onChange={handlePlatform}>
								<option value="all">All Platform</option>
								<option value="google">Google</option>
								<option value="youtube">You Tube</option>
								<option value="facebook">Facebook</option>
								<option value="instagram">Instagram</option>
							</DropDown>
							<UtilText>Status:</UtilText>
							<DropDown name="status" onChange={handleStatus}>
								<option value="all">All Status</option>
								<option value="Live now">Live Now</option>
								<option value="Paused">Paused</option>
								<option value="Exhausted">Exhausted</option>
							</DropDown>
							<DropDown name="sort">
								<option value="all">Show all date</option>
								<option value="7">Last 7days</option>
								<option value="30">Last 30days</option>
								<option value="365">Last 365days</option>
							</DropDown>
						</Wrapper>
					</Action>

					<Table>
						<tbody>
						<Row>
							<Head>
								<Box type="checkbox"/>
							</Head>
							<Head>On/Off</Head>
							<Head>Campaigns</Head>
							<Head>Date Range</Head>
							<Head>Clicks</Head>
							<Head>Budget</Head>
							<Head>Location</Head>
							<Head>Platform</Head>
							<Head>Status</Head>
							<Head>Actions</Head>
						</Row>

						{sortData.map((item) => (
							<Items item={item}  key ={item._id}/>
						))}

						</tbody>
					</Table>
				</Board>

			</Container>

		</div>
	)
}

/*Style*/
const Container  = styled.div`
	margin-left: 80px;
	padding: 2rem;
`

const Banner = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin-bottom: 1rem;
`

const Heading = styled.div`
`

const BannerTitle = styled.h4`
	font-weight: bold;
	font-size: 24px;
	margin-bottom: 5px;
`

const BannerText = styled.p`
	margin-bottom: 0;
	font-size: 16px;
	color: rgba(0,0,0,0.5);
`

const CreateBtn= styled.button`
	background-color: var(--light);
	padding: 0.5rem 0.75rem;
	border: none;
	color: white;
	cursor: pointer;
	border-radius: 5px;

	&:hover {
		background-color: var(--dark);
		transform: scale(1.1);
	}
`


const Board = styled.div`
	background-color: white;
	border-radius: 5px;
	padding: 5px;
`


const Action = styled.div`
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: space-between;
	background: white;
	margin-bottom: 1rem;
`
const Wrapper = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	gap: 0.5rem;
`

const UtilText= styled.p`
	font-size: 0.7rem;
	color: rgba(0,0,0,0.5);
	margin: 0 0.5rem;
`

const Search = styled.input`
	width: 315px;
	outline: none;
	padding: 0.5rem 0.75rem;
	border-radius: 5px;
	border: 1px solid var(--grey-1);
	::placeholder {
		color: rgba(0,0,0,0.5);
	}
`

const DropDown= styled.select`
	padding: 0.5rem;
	border-radius: 5px;
	outline: none;
`

const Table = styled.table`
	width: 100%;
	border-spacing: 0;
`

const Box= styled.input`
	margin: auto;
`
const Row = styled.tr`
	border: none;
`
const Head = styled.th`
	font-size: 0.7rem;
	color: rgba(0,0,0,0.5);
	background-color: var(--grey-1);
	padding: 0.5rem;
`
export default Dashboard
