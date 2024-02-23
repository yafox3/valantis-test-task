import { IProduct } from './product'

interface IFilterResponse {
	result: string[]
}

interface IGetIdsResponse {
	result: string[]
}

interface IGetItemsResponse {
	result: IProduct[]
}

interface IGetFieldsResponse {
	result: string & null[]
}

export type { IFilterResponse, IGetFieldsResponse, IGetIdsResponse, IGetItemsResponse }

