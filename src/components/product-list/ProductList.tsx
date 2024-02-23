import { ProductItem } from '../'
import { IProduct } from '../../models'
import styles from './ProductList.module.css'

interface ProductListProps {
	products: IProduct[]
}

const ProductList: React.FC<ProductListProps> = ({ products }) => {
	return (
		<div className={styles.productsRow}>
			{products.map(product => (
				<ProductItem {...product} key={product.id} />
			))}
		</div>
	)
}

export { ProductList }

