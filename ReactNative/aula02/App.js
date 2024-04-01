import { StyleSheet, Text, View, Image, Button } from 'react-native';
import Btn from './src/pages/btn';
import minhaImagem from './assets/imgs/businessman.png';

export default function App() {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Haroldo Mayworm</Text>
            <Image style={styles.img} source={minhaImagem} />
            <Btn />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#bbb',
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        fontSize: 32,
    },
    img: {
        width: 250,
        height: 250,
        margin: 45
    },
});
