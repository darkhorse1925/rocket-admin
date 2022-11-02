import styled from 'styled-components'
import Navbar from './Nav.js'
import Header from './Header.js'
import {Link} from 'react-router-dom'

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
	padding: 3rem;
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
const SearchLocation = styled.input`
	width: 600px;
	outline: none;
	padding: 0.5rem 0.75rem;
	border-radius: 5px;
	border: 1px solid var(--grey-1);
	::placeholder {
		color: rgba(0,0,0,0.5);
	}
`

const Label = styled.p`
	color: rgba(0,0,0,0.7);
	font-size: 10px;
	width: 100%;
	margin: 0;
`
const Wrapper = styled.div`
	display: flex;
	flex-wrap: wrap;
`

const SuperWrapper = styled.div`
	display: flex;
	justify-content: space-between;
	margin-bottom: 3rem;
`

const SmallHeader = styled.p`
	text-decoration: underline;
	font-weight: bold;
`

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
					<SmallHeader>Budget and dates info</SmallHeader>

					<SuperWrapper>
						<Wrapper>
							<Label>Enter start date</Label>
							<Search type="text" placeholder="dd/mm/yyyy"/>
						</Wrapper>
						<Wrapper>
							<Label>Enter end date</Label>
							<Search type="text" placeholder="dd/mm/yyyy"/>
						</Wrapper>
					</SuperWrapper>
					<SmallHeader>Location info</SmallHeader>
					<SearchLocation type="text" placeholder='Select a place name, address or coordinates'/>
				</Board>

				<ButtonWrapper>
					<Link to ={`/finalstep`}>
						<ContinueBtn>Continue</ContinueBtn>
					</Link>
				</ButtonWrapper>
				
			</Container>
		</div>
	)
}
export default FirstStep

