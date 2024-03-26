import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import styles from './assets/css/style';

export default function App() {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>This is my app!!!</Text>
            <StatusBar style="auto" />
        </View>
    );
}
