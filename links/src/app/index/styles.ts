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
	modal: {
		flex: 1,
		justifyContent: 'flex-end',
	},
	modalContent: {
		backgroundColor: colors.gray[900],
		borderTopWidth: 1,
		borderTopColor: colors.gray[800],
		padding: 24,
		paddingBottom: 32,
	},
	modalHeader: {
		width: '100%',
		flexDirection: 'row',
		alignItems: 'center',
		marginBottom: 32,
	},
	modalCategory: {
		flex: 1,
		fontSize: 16,
		fontWeight: '500',
		color: colors.gray[400],
	},
	modalLinkName: {
		fontSize: 16,
		fontWeight: '500',
		color: colors.gray[400],
	},
	modalUrl: {
		fontSize: 14,
		color: colors.gray[400],
	},
	modalFooter: {
		flexDirection: 'row',
		marginTop: 32,
		width: '100%',
		justifyContent: 'space-between',
		borderTopWidth: 1,
		borderTopColor: colors.gray[600],
		paddingVertical: 18,
	},
})
