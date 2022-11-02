import styled from 'styled-components'
import Zocket from '../assets/logo.png'
import Home from '../assets/house.svg'
import Campaign from '../assets/volume-high.svg'
import Products from '../assets/bag.svg'
import Customers from '../assets/profile-2user.svg'

const Bar = styled.nav`
	position: fixed;
	top: 0;
	left: 0;
	display: flex;
	flex-direction: column;
	width: 82px;
	background-color: var(--dark);
	align-items: center;
	justify-content: flex-start;
	height: 100vh;
	gap: 4rem;
	padding: 4rem 0;
`

const Logo= styled.div`
`
const Menu= styled.div`
`
const MenuItem= styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	padding: 10px 0;
	width: 82px;
	cursor: pointer;

	&:hover {
		background:rgba(25,119,243,0.1);
		border-left: 5px solid var(--light)
	}
`
const Icon= styled.img`
`

const MenuText= styled.p`
	font-size: 10px;
	color: white;
	margin-top: 8px;
	margin-bottom: 0px;
`

const Navbar = () =>{
	return (
	<Bar>
		<Logo>
			<img src={Zocket} alt="" />
		</Logo>
		<Menu>
			<MenuItem>
				<Icon src={Home}/>
				<MenuText>Home</MenuText>
			</MenuItem>
			<MenuItem>
				<Icon src={Campaign}/>
				<MenuText>Campaign</MenuText>
			</MenuItem>
			<MenuItem>
				<Icon src={Products}/>
				<MenuText>Products</MenuText>
			</MenuItem>
			<MenuItem>
				<Icon src={Customers}/>
				<MenuText>Customers</MenuText>
			</MenuItem>
		</Menu>
	</Bar>
	)
}

export default Navbar
