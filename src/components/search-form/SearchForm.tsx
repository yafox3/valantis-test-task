import { Select } from '../'
import styles from './SearchForm.module.css'

interface Option {
	value: string
	label: string
}

interface SearchFormProps {
	options: Option[]
	queryStr: string | number
	onQueryStrChange: (e: React.ChangeEvent<HTMLInputElement>) => void
	onQueryChange: (value: string) => void
	onSearch: (e: React.FormEvent<HTMLFormElement>) => void
}

const SearchForm: React.FC<SearchFormProps> = ({
	options,
	onQueryChange,
	onSearch,
	onQueryStrChange,
	queryStr
}) => {
	return (
		<form className={styles.queryBar} onSubmit={onSearch}>
			<Select
				options={options}
				setValue={(v: string) => {
					onQueryChange(v)
				}}
			/>
			<input
				type='text'
				placeholder='Поиск'
				value={queryStr}
				onChange={onQueryStrChange}
			/>
			<button>Поиск</button>
		</form>
	)
}

export { SearchForm }

