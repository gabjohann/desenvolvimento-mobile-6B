import { Categories } from '@/components/categories'
import { Link } from '@/components/link'
import { Option } from '@/components/option'
import { colors } from '@/styles/colors'
import { MaterialIcons } from '@expo/vector-icons'
import { router } from 'expo-router'
import {
	FlatList,
	Image,
	Modal,
	Text,
	TouchableOpacity,
	View,
} from 'react-native'
import { styles } from './styles'

export default function Index() {
	return (
		<View style={styles.container}>
			<View style={styles.header}>
				<Image source={require('@/assets/logo.png')} style={styles.logo} />

				<TouchableOpacity onPress={() => router.navigate('/add')}>
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

			<Modal transparent visible={false}>
				<View style={styles.modal}>
					<View style={styles.modalContent}>
						<View style={styles.modalHeader}>
							<Text style={styles.modalCategory}>Curso</Text>
							<MaterialIcons name="close" size={20} color={colors.gray[400]} />
						</View>
						<Text style={styles.modalLinkName}>Google</Text>
						<Text style={styles.modalUrl}>https://google.com</Text>

						<View style={styles.modalFooter}>
							<Option name="Excluir" icon="delete" variant="secondary" />
							<Option name="Abrir" icon="language" />
						</View>
					</View>
				</View>
			</Modal>
		</View>
	)
}
