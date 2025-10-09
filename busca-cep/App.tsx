import { StatusBar } from 'expo-status-bar'
import { useState } from 'react'
import {
	Alert,
	StyleSheet,
	Text,
	TextInput,
	TouchableOpacity,
	View,
} from 'react-native'

type CepData = {
	logradouro: string
	bairro: string
	localidade: string
	uf: string
}

export default function App() {
	const [cep, setCep] = useState<string>('')
	const [logradouro, setLogradouro] = useState<string>('')
	const [bairro, setBairro] = useState<string>('')
	const [localidade, setLocalidade] = useState<string>('')
	const [uf, setUf] = useState<string>('')

	async function buscarCep() {
		if (cep === '') {
			Alert.alert('CEP inválido!')
			return
		}

		try {
			const response = await fetch(`https:viacep.com.br/ws/${cep}/json/`)

			const data: CepData = await response.json()

			if ('erro' in data) {
				Alert.alert('CEP não encontrado!')
				return
			}

			setLogradouro(data.logradouro)
			setBairro(data.bairro)
			setLocalidade(data.localidade)
			setUf(data.uf)
		} catch (error) {
			console.error(error)
			Alert.alert('Erro ao buscar o CEP!')
		}
	}

	return (
		<View style={styles.container}>
			<Text style={styles.title}>Buscar Endereço pelo CEP</Text>

			<View style={styles.inputContainer}>
				<TextInput
					style={styles.input}
					placeholder="Digite o CEP"
					value={cep}
					onChangeText={setCep}
					keyboardType="numeric"
				/>
				<TouchableOpacity style={styles.button} onPress={buscarCep}>
					<Text>Buscar</Text>
				</TouchableOpacity>
			</View>

			<View style={styles.resultContainer}>
				<Text style={styles.label}>Logradouro: {logradouro}</Text>
				<Text style={styles.label}>Bairro: {bairro}</Text>
				<Text style={styles.label}>Cidade: {localidade}</Text>
				<Text style={styles.label}>Estado: {uf}</Text>
			</View>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		padding: 16,
		paddingTop: 32,
		backgroundColor: '#f4f4f4',
	},
	title: {
		fontSize: 24,
		fontWeight: 'bold',
		marginBottom: 16,
		textAlign: 'center',
	},
	inputContainer: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
		marginBottom: 20,
		gap: 12,
	},
	input: {
		flex: 1,
		borderWidth: 1,
		borderColor: '#ccc',
		padding: 10,
		borderRadius: 4,
	},
	button: {
		backgroundColor: '#6495ED',
		paddingVertical: 10,
		paddingHorizontal: 20,
		borderRadius: 4,
	},
	resultContainer: {
		marginTop: 20,
	},
	label: {
		fontSize: 16,
		marginBottom: 10,
	},
})
