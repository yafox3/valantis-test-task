import { FC } from 'react'
import styles from './Skeleton.module.css'

interface SkeletonProps extends React.HTMLAttributes<HTMLDivElement> {}

const Skeleton: FC<SkeletonProps> = ({ style }) => {
	return <div className={styles.skeleton} style={style}></div>
}

export { Skeleton }

