import { isAxiosError } from 'axios'
import { useState } from 'react'

export const useFetch = (
	callback: (...args: unknown[]) => Promise<unknown>
): [boolean, string, () => Promise<unknown>] => {
	const [isLoading, setIsLoading] = useState(false)
	const [error, setError] = useState<string>('')

	const fetching = async () => {
		try {
			setIsLoading(true)

			await callback()
		} catch (err: unknown) {
			if (isAxiosError(err)) {
				setError(err.response?.data)
			}
			setError((err as Error).message)
		} finally {
			setIsLoading(false)
		}
	}

	return [isLoading, error, fetching]
}
