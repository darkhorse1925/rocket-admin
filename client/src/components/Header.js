import styled from 'styled-components'

import Premium from '../assets/Premium.svg'
import Translate from '../assets/Translate.svg'
import Profile from '../assets/Profile.png'
import Bell from '../assets/bell.svg'
import Gift from '../assets/gift.svg'


const Bar = styled.nav`
	position: sticky;
	top: 0;
	left: 0;
	display: flex;
	width: 100%;
	align-items: center;
	justify-content: flex-end;
	height: 80px;
	padding: 0 3rem;
	background: white;
	gap:1rem;
	border: 1px solid #dae6ff;
`

const Icon = styled.img`
	cursor: pointer;
`

const Username = styled.p`
	margin: 0;
	font-size: 14px;
`

const SmallText = styled.p`
	font-size: 0.7rem;
	margin: 0;
`

const Buy = styled.div`
	border-radius: 5px;
	background: rgba(242, 154, 46, 0.1);
	display: flex;
	gap: 1rem;
	padding: 0.5rem;
	cursor: pointer;
`

const User = styled.div`
	display:flex;
	gap: 0.5rem;
	align-items: center;
`

const SmallText2 = styled.p`
	font-size: 0.7rem;
	margin: 0;
	color: #FF8c00;
`

const Navbar = () =>{
	return (
	<Bar>
		<SmallText>Free trail ends in 2 days</SmallText>
		<Buy>
			<Icon src={Premium}/>
			<SmallText2>Buy Plan</SmallText2>
		</Buy>
		<Icon src={Gift}/>
		<Icon src={Bell}/>
		<User>
			<Icon src={Profile}/>
			<Username>Mukund Cake shop</Username>
		</User>
		<Icon src={Translate}/>
	</Bar>
	)
}

export default Navbar
