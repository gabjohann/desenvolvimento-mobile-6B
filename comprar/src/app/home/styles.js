import { StyleSheet } from 'react-native'
import { colors } from '../../styles/colors'

export const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		backgroundColor: colors.background.primary,
		paddingTop: 62,
	},
	logo: {
		width: 134,
		height: 34,
	},
	form: {
		width: '100%',
		paddingHorizontal: 24,
		gap: 7,
		marginTop: 42,
	},
})
