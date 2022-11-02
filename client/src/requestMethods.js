import axios from 'axios'

const URL = 'http://3.108.56.34:8080'

export default axios.create({
	baseURL: `${URL}/api/dashboard/6360f6c1668b36dea2ae80a3`
})

