export enum RequestActions {
	FILTER = 'filter',
	GET_ITEMS = 'get_items',
	GET_IDS = 'get_ids',
	GET_FIELDS = 'get_fields'
}

interface IGetIdsRequestParams {
	offset: number
	limit: number
}

interface IGetIdsByQueryRequestParams {
	price?: number
	brand?: string | null
	product?: string
}

interface IGetItemsRequestParams {
	ids: string[]
}

interface IGetFieldsRequestParams extends IGetIdsRequestParams {
	field: number
}

export type {
	IGetFieldsRequestParams,
	IGetIdsByQueryRequestParams,
	IGetIdsRequestParams,
	IGetItemsRequestParams
}

