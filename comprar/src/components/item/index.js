import { TrashIcon } from 'phosphor-react-native'
import { TouchableOpacity, View } from 'react-native'
import { colors } from '../../styles/colors'
import { StatusIcon } from '../status-icon'
import { styles } from './styles'

export function Item({ data, onStatus, onRemove }) {
	return (
		<View style={styles.container}>
			<TouchableOpacity activeOpacity={0.8} onPress={onStatus}>
				<StatusIcon status={data.status} />
			</TouchableOpacity>

			<Text style={styles.description}>{data.description}</Text>

			<TouchableOpacity onPress={onRemove}>
				<TrashIcon size={18} color={colors.text.muted} />
			</TouchableOpacity>
		</View>
	)
}
