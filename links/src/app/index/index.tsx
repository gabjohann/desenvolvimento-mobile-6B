import { Categories } from '@/components/categories'
import { Link } from '@/components/link'
import { colors } from '@/styles/colors'
import { MaterialIcons } from '@expo/vector-icons'
import { FlatList, Image, TouchableOpacity, View } from 'react-native'
import { styles } from './styles'

export default function Index() {
	return (
		<View style={styles.container}>
			<View style={styles.header}>
				<Image source={require('@/assets/logo.png')} style={styles.logo} />

				<TouchableOpacity>
					<MaterialIcons name="add" size={32} color={colors.green[300]} />
				</TouchableOpacity>
			</View>

			<Categories />

			<FlatList
				data={['1', '2', '3']}
				keyExtractor={(item) => item}
				renderItem={({ item }) => (
					<Link
						name="Qualquer"
						url="https://google.com"
						onDetails={() => console.log('clicou!')}
					/>
				)}
				style={styles.links}
				contentContainerStyle={styles.linksContent}
				showsVerticalScrollIndicator={false}
			/>
		</View>
	)
}
