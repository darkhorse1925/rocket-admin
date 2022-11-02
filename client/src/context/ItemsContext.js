import {useState, useEffect, createContext} from 'react'
import axios from '../requestMethods.js'

const ItemContext= createContext()

export function ItemProvider({children}) {

	const [userData, setUserData] = useState([])

	useEffect(()=> {
		async function fetchData() {
			const res = await axios.get()
			setUserData(res.data)
			console.log(res.data)
		}
		fetchData()
	},[])

	const value = {userData, setUserData}

	return (
		<ItemContext.Provider value={value}>
			{children}
		</ItemContext.Provider>
	)
}

export default ItemContext 

