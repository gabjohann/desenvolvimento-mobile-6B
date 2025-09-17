import { Text, TouchableOpacity } from 'react-native'
import { FilterStatus } from '../../types/filter-status'
import { StatusIcon } from '../status-icon'
import { styles } from './styles'

export function Filter({ status, isActive, ...rest }) {
	return (
		<TouchableOpacity {...rest} style={styles.container}>
			<StatusIcon status={status} />
			<Text style={styles.title}>
				{status === FilterStatus.DONE ? 'Comprados' : 'Pendentes'}
			</Text>
		</TouchableOpacity>
	)
}
