import React from 'react'
import styles from './Pagination.module.css'

interface PaginationProps {
	page: number
	limit: number
	totalProducts: number
	onPageBackward: () => void
	onPageForward: () => void
}

const Pagination: React.FC<PaginationProps> = ({
	page,
	limit,
	totalProducts,
	onPageBackward,
	onPageForward
}) => {
	const currentPageProducts = Math.min(page * limit, totalProducts)

	return (
		<div className={styles.pagination}>
			<p>Страница {page}</p>
			<p>
				<span>
					Товаров: {currentPageProducts} / {totalProducts}
				</span>
			</p>
			<div className={styles.actions}>
				<button disabled={page <= 1} onClick={onPageBackward}>
					Назад
				</button>
				<button disabled={Math.floor(totalProducts / limit) < page} onClick={onPageForward}>
					Вперед
				</button>
			</div>
		</div>
	)
}

export { Pagination }
