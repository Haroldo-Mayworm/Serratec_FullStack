import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import Pilar from './src/components/Pilar';
import Linha from './src/components/Linha';
import Pontos from './src/components/Pontos';

export default function App() {
    return (
        <View style={styles.container}>
            {/* <Pilar /> */}
            {/* <Linha /> */}
            {/* <Pontos /> */}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
