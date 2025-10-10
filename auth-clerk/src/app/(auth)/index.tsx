import { Button } from '@/components/button'
import { useAuth, useUser } from '@clerk/clerk-expo'
import { Image, StyleSheet, Text, View } from 'react-native'

export default function Home() {
	const { user } = useUser()
	const { signOut } = useAuth()

	return (
		<View style={style.container}>
			<Image style={style.img} source={{ uri: user?.imageUrl }} />
			<Text style={style.text}>Olá, {user?.firstName}!</Text>
			<Button icon="exit" title="Sair" onPress={() => signOut()} />
		</View>
	)
}

const style = StyleSheet.create({
	container: {
		flex: 1,
		padding: 32,
		alignItems: 'center',
		justifyContent: 'center',
	},
	text: {
		fontSize: 18,
		fontWeight: 'bold',
	},
	img: {
		width: 92,
		height: 92,
		borderRadius: 12,
	},
})
