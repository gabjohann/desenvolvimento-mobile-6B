import { ImageBackground, StyleSheet, Text, View } from "react-native";

export default function Index() {
    return (
        <View style={styles.container}>
            <ImageBackground 
                source={require('@/assets/background.png')} 
                style={styles.background}
            >
                <Text style={styles.text}>oi</Text>
            </ImageBackground>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    background: {
        flex: 1,
        width: '100%',
        },
    text: {
        fontSize: 24,
        color: 'white',
        fontWeight: 'bold',
    },
});
