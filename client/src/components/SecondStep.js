import styled from 'styled-components'
import Navbar from './Nav.js'
import Header from './Header.js'
import Radiocard from './Radiocard.js'
import {Link} from 'react-router-dom'
import axios from 'axios'
import {useState, useEffect} from 'react'
import './radio.css'

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
const BoardTitle =styled.div`
	margin: 0;
	margin-left: 1rem;
	font-weight: bold;
	display: inline;
`

const Hr = styled.hr`
	margin: 0.5rem 2rem;
	color: var(--grey-3);
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

const FirstStep = () => {

	const [products, setProducts] = useState([])

	useEffect(()=> {
		async function fetchData() {
			const res = await axios.get("http://localhost:5000/api/product")
			setProducts(res.data)
			console.log(res.data)
		}
		fetchData()
	},[])

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
					<BoardTitle>Choose the product</BoardTitle>
					<Hr />
					<div className='radio-buttons'>
						{products.map((item)=>(
							<Radiocard item={item} key={item._id}/>
						))
						}
					</div>
				</Board>
				
				<ButtonWrapper>
					<Link to ={`/thirdstep`}>
						<ContinueBtn>Continue</ContinueBtn>
					</Link>
				</ButtonWrapper>
			</Container>
		</div>
	)
}
export default FirstStep


