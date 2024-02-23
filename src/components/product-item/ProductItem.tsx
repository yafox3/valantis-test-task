import { FC } from 'react'
import { IProduct } from '../../models'
import styles from './Product.module.css'

interface ProductItemProps extends IProduct {}

const ProductItem: FC<ProductItemProps> = ({ brand, id, price, product: title }) => {
	return (
		<div className={styles.product}>
			<div className={styles.img}>
				<img src={`https://prd.place/200?id=${title}`} alt={title}/>
			</div>

			<div className={styles.info}>
				<h3 className={styles.title}>{title}</h3>
				<p className={styles.price}>Цена: {price}</p>
				<p className={styles.brand}>{brand || 'Нет бренда'}</p>
				<span className={styles.id}>id: {id}</span>
			</div>
		</div>
	)
}

export { ProductItem }

