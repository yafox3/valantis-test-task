import { FC } from 'react'

interface Option {
	label: string
	value: string
}

interface SelectProps extends React.HTMLAttributes<HTMLSelectElement> {
	options: Option[]
	setValue: (value: string) => void
}

const Select: FC<SelectProps> = ({ options, setValue, defaultValue }) => {
	return (
		<select onChange={e => setValue(e.target.value)} defaultValue={defaultValue}>
			<option disabled>Сортировать по</option>

			{options.map(opt => (
				<option key={opt.value} value={opt.value}>
					{opt.label}
				</option>
			))}
		</select>
	)
}

export { Select }

