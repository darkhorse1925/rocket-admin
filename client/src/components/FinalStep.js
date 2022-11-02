import styled from 'styled-components'
import Navbar from './Nav.js'
import Header from './Header.js'
import userRequest from '../requestMethods.js'
import {useState} from 'react'

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

/*start*/
const FinalStep = () => {
	const data = {
    "name":"Cup Cake",
    "budget":2700,
    "location": "Chennai",
    "platform": "google",
    "clicks": 0
	}

	const [cake, setCake] = useState([])

	function clickhandler () {
		async function sendData () {
			try {
				const res = await userRequest.post('/', data)
				setCake(res.data)
			} catch (err) {
				console.log(err)
			}
		}
		sendData()
	}

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
					<h3>Click "Start Campaign" to upload a product to DB for demo</h3>
					<p>uploaded product will show here: {JSON.stringify(cake)}</p>
					<a href="/">Go to dashboard see the change(**Click here**)</a>
				</Board>

				<ButtonWrapper>
				<ContinueBtn onClick={clickhandler}>Start Campaign</ContinueBtn>
				</ButtonWrapper>
				
			</Container>
		</div>
	)
}
export default FinalStep 
