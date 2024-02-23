import { useEffect, useMemo, useState } from 'react'
import { ProductsApi } from './api/products-api'
import { Pagination, ProductList, ProductListSkeleton, SearchForm } from './components'
import { useFetch } from './hooks/useFetch'
import { IGetIdsByQueryRequestParams, IProduct } from './models'
import styles from './styles/App.module.css'

type QueryBy = 'brand' | 'price' | 'product'

const selectOptions = [
	{
		value: 'price',
		label: 'По цене'
	},
	{
		value: 'brand',
		label: 'По бренду'
	},
	{
		value: 'product',
		label: 'По названию'
	}
]

const App = () => {
	const [products, setProducts] = useState<IProduct[]>([])
	const [searchQuery, setSearchQuery] = useState<IGetIdsByQueryRequestParams>({})
	const [limit, setLimit] = useState(50)
	const [page, setPage] = useState(1)
	const [selectedQuery, setSelectedQuery] = useState<QueryBy>('price')
	const [isPostsLoading, , fetchProducts] = useFetch(async () => {
		const result = await ProductsApi.getProducts({
			ids: await ProductsApi.getIds({ limit, offset: 0 })
		})

		setProducts(result)
		setPage(1)
	})
	const [isPostsByQueryLoading, , fetchProductsByQuery] = useFetch(async () => {
		const query = {
			[selectedQuery]: searchQuery[selectedQuery]
		}
		const result = await ProductsApi.getProducts({
			ids: await ProductsApi.getIdsByQuery(query)
		})

		setPage(1)
		setProducts(result)
	})

	useEffect(() => {
		fetchProducts()
	}, [])

	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		console.log(searchQuery[selectedQuery])

		if (!searchQuery[selectedQuery]) {
			await fetchProducts()
		}

		await fetchProductsByQuery()
	}

	const uniqueProducts = useMemo(() => {
		return products.filter(
			(product, index, self) => index === self.findIndex(p => p.id === product.id)
		)
	}, [products])

	const productsDividedByPages = useMemo(() => {
		const start = (page - 1) * limit
		const end = Math.min(start + limit, uniqueProducts.length)
		return uniqueProducts.slice(start, end)
	}, [uniqueProducts, page, limit])

	return (
		<div className={styles.wrapper}>
			<div className={styles.container}>
				<h1 className={styles.sectionTitle}>Valantis Тестовое задание</h1>

				<SearchForm
					options={selectOptions}
					onQueryStrChange={(e: React.ChangeEvent<HTMLInputElement>) => {
						setSearchQuery(prev => ({
							...prev,
							[selectedQuery]: selectedQuery === 'price' ? +e.target.value : e.target.value
						}))
					}}
					queryStr={searchQuery[selectedQuery] || ''}
					onQueryChange={(value: string) => {
						setSelectedQuery(value as QueryBy)
						setSearchQuery({})
					}}
					onSearch={handleSubmit}
				/>

				{isPostsLoading || isPostsByQueryLoading ? (
					<ProductListSkeleton count={limit} />
				) : (
					<>
						<ProductList products={productsDividedByPages} />

						<Pagination
							page={page}
							limit={limit}
							totalProducts={uniqueProducts.length}
							onPageBackward={() => setPage(prev => prev - 1)}
							onPageForward={() => setPage(prev => prev + 1)}
						/>
					</>
				)}
			</div>
		</div>
	)
}

export { App }

