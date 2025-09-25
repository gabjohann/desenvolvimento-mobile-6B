import { colors } from '@/styles/colors'
import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
	container: {
		flex: 1,
		paddingTop: 42,
	},
	header: {
		marginBottom: 32,
		paddingHorizontal: 24,
		width: '100%',
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
	},
	logo: {
		width: 32,
		height: 32,
	},
	links: {
		borderTopWidth: 1,
		borderTopColor: colors.gray[600],
	},
	linksContent: {
		gap: 20,
		padding: 20,
		paddingBottom: 100,
	},
})
