import { axios } from '../http'
import {
	IGetIdsByQueryRequestParams,
	IGetIdsRequestParams,
	IGetIdsResponse,
	IGetItemsRequestParams,
	IGetItemsResponse,
	IProduct,
	RequestActions
} from '../models'

export class ProductsApi {
	static async getProducts(params: IGetItemsRequestParams): Promise<IProduct[]> {
		const body = {
			action: RequestActions.GET_ITEMS,
			params
		}

		const {
			data: { result: products }
		} = await axios.post<IGetItemsResponse>('', JSON.stringify(body))

		return products
	}

	static async getIds(params: IGetIdsRequestParams): Promise<string[]> {
		const body = {
			action: RequestActions.GET_IDS,
			params
		}

		const {
			data: { result: ids }
		} = await axios.post<IGetIdsResponse>('', JSON.stringify(body))

		return ids
	}
	
	static async getIdsByQuery(params: IGetIdsByQueryRequestParams): Promise<string[]> {
		const body = {
			action: RequestActions.FILTER,
			params
		}

		const {
			data: { result: ids }
		} = await axios.post<IGetIdsResponse>('', JSON.stringify(body))

		return ids
	}
}
