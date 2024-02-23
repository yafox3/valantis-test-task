import { FC } from 'react'
import { Skeleton } from '../'
import styles from './ProductList.module.css'

interface ProductListSkeletonProps {
	count: number
}

const ProductListSkeleton: FC<ProductListSkeletonProps> = ({ count }) => {
	return (
		<div className={styles.productsRow}>
			{Array.from({ length: count }).map(() => (
				<Skeleton
					style={{
						minWidth: '250px',
						minHeight: '300px'
					}}
				/>
			))}
		</div>
	)
}

export { ProductListSkeleton }

