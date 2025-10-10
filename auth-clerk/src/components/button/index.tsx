import { Ionicons } from '@expo/vector-icons'
import {
	ActivityIndicator,
	Text,
	TouchableOpacity,
	type TouchableOpacityProps,
} from 'react-native'
import { styles } from './styles'

interface ButtonProps extends TouchableOpacityProps {
	title: string
	isLoading?: boolean
	icon: keyof typeof Ionicons.glyphMap
}

export function Button({ title, isLoading, icon, ...rest }: ButtonProps) {
	return (
		<TouchableOpacity
			style={styles.container}
			disabled={isLoading}
			activeOpacity={0.8}
			{...rest}
		>
			{isLoading ? (
				<ActivityIndicator color="#fff" />
			) : (
				<>
					<Ionicons name={icon} style={styles.icon} />
					<Text style={styles.text}>{title}</Text>
				</>
			)}
		</TouchableOpacity>
	)
}
