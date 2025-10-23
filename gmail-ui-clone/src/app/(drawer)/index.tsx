import { StyleSheet, Text, View } from 'react-native'
import { colors } from '@/styles/colors'
import { fontFamily } from '@/styles/font-family'

export default function AllInBoxes() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Todas as caixas de entrada</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: colors.gray[900],
        paddingTop: 56,
        padding: 16,
    },
    title: {
        fontSize: 24,
        color: '#fff',
        fontFamily: fontFamily.heading
    }
})
