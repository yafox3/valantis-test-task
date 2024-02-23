import axios from 'axios'
import md5 from 'md5'

export const instance = axios.create({
	baseURL: import.meta.env.VITE_API_URL,
	headers: {
		'Content-Type': 'application/json'
	}
})

instance.interceptors.request.use(config => {
	const password = import.meta.env.VITE_API_PASSWORD
	const timestamp = new Date().toISOString().slice(0, 10).replace(/-/g, '')

	const xAuthValue = md5(password + '_' + timestamp)

	config.headers.set('x-auth', xAuthValue)

	return config
})
