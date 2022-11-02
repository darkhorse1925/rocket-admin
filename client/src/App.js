import Dashboard from './components/Dashboard.js'
import FirstStep from './components/FirstStep.js'
import SecondStep from './components/SecondStep.js'
import ThirdStep from './components/ThirdStep.js'
import FinalStep from './components/FinalStep.js'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'


function App() {
  return (
		<Router>
			<Routes>
				<Route index element={<Dashboard />} />
				<Route path="/firststep" element={<FirstStep/>} />
				<Route path="/secondstep" element={<SecondStep/>} />
				<Route path="/thirdstep" element={<ThirdStep/>} />
				<Route path="/finalstep" element={<FinalStep/>} />
			</Routes>
		</Router>
	) 
}

export default App;
