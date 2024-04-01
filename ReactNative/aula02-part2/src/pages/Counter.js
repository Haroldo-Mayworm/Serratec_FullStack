import { StyleSheet } from 'react-native';
import { Text, Button, View } from 'react-native';
import { useState } from 'react';

function Counter() {
    const [count, setCount] = useState(0);
    const [tema, setTema] = useState(true);

    let cont;
    const incrementCounter = () => {
        setCount(count + 1);
    }

    const mudarTema = () => {
        setTema(false);
    }

    return (
        <View style={tema ? styles.claro : styles.dark}>
            <Text>I am an accountant</Text>
            <Text style={styles.counter}>{count}</Text>
            <Button 
                title="Click to increase" 
                onPress={incrementCounter} />
            <Button 
                title="Light / Dark" 
                onPress={mudarTema} />
        </View>
    );
}

export default Counter;

const styles = StyleSheet.create({
    counter: {
        fontSize: 100,
    },
    claro: {
        backgroundColor: '#fff',
        flex: 1,
        color: '#000',
        resizeMode: 'center',
        alignItems: 'center',
        justifyContent: 'space-around'
    },
    dark: {
        backgroundColor: '#000',
        flex: 1,
        resizeMode: 'center',
        alignItems: 'center',
        justifyContent: 'space-around'
    },
    textClaro: {
        color: '#fff'
    },
    textDark: {
        color: '#000'
    }
});
