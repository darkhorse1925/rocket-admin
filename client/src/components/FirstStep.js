import styled from 'styled-components'
import Navbar from './Nav.js'
import Header from './Header.js'
import Radiocard from './Radiocard.js'
import leads from '../assets/Leads.svg'
import website from '../assets/website_traffic.svg'
import followers from '../assets/increase_followers.svg'
import app from '../assets/App_install.svg'
import catalogue from '../assets/Catalogue.svg'
import store from '../assets/Store.svg'
import view from '../assets/Views.svg'
import Phone from '../assets/Phone.svg'
import customers from '../assets/Customers.svg'
import {Link} from 'react-router-dom'
import './radio.css'

const info = [
	{img: Phone, name: "Get Leads as calls", desc:"Reach broad audience and get leads as calls"},
	{img: leads, name: "Get Leads as Facebook messages", desc:"Get more Fb messages from leads"},
	{img: followers, name: "Increase page followers", desc:"Encourage customers to follow page"},
	{img: customers, name: "Get Customer Leads", desc:"Encourage customers to take action"},
	{img: view, name: "Get more Youtube views", desc:"Increase yt views"},
	{img: website, name: "Get more website traffic", desc:"Increase web traffic"},
	{img: store, name: "Increase live store traffic", desc:"Increase store traffic"},
	{img: app, name: "Increase app install", desc:"Increase app install"},
	{img: catalogue, name: "Increase Catalogue sales", desc:"Increase your sales"},
]

const FirstStep = () => {
	return (
		<div>
			<Header />
			<Navbar />
			<Container>
				<Banner>
					<Heading>
						<BannerTitle>Your Ad Campaign</BannerTitle>
						<BannerText>Launch your ad in just 4 easy steps</BannerText>
					</Heading>
				</Banner>

				<Board>
					<BoardTitle>What you want to do? </BoardTitle>
					<Hr />
					<div className='radio-buttons'>
						{info.map((item)=>(
								<Radiocard item={item} key={item.img}/>
						))
						}
					</div>
				</Board>

				<ButtonWrapper>
					<Link to ={`/secondstep`}>
						<ContinueBtn>Continue</ContinueBtn>
					</Link>
				</ButtonWrapper>
				
			</Container>
		</div>
	)
}
/*style start*/
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
const BoardTitle =styled.div`
	display: flex;
	margin: 0;
	margin-left: 1rem;
	font-weight: bold;
	display: inline;
`

const Hr = styled.hr`
	margin: 0.5rem 2rem;
	color: var(--grey-3);
`

const Board = styled.div`
	background-color: white;
	border-radius: 5px;
	padding: 5px;
`
const ContinueBtn= styled.button`
	background-color: var(--light);
	padding: 0.5rem 0.75rem;
	border: none;
	color: white;
	cursor: pointer;
	border-radius: 5px;
	width: 230px;

	&:hover {
		background-color: var(--dark);
		transform: scale(1.1);
	}
`
const ButtonWrapper = styled.div`
	margin-top: 1rem;
	width: 100%;
	display: flex;
	justify-content: flex-end;
`
export default FirstStep
