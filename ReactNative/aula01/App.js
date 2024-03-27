import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Text, View, Image, TouchableOpacity } from 'react-native';
import styles from './assets/css/style';

export default function App() {
    const [backgroundColor, setBackgroundColor] = useState('#fff');
    const [textColor, setTextColor] = useState('#000');

    const color = () => {
        if (backgroundColor === '#fff' && textColor === '#000') {
            setBackgroundColor('#02066F');
            setTextColor('#fff');
        } else {
            setBackgroundColor('#fff');
            setTextColor('#000');
        }
    };

    return (
        <View style={[styles.container, { backgroundColor }]}>
            <Image source={require('./assets/imgs/LogoReactNative.png')} style={styles.img} />

            <Text style={[styles.text, { color: textColor }]}>This is my app!</Text>

            <TouchableOpacity onPress={color}>
                <Text style={styles.btn}>change color</Text>
            </TouchableOpacity>

            <StatusBar style="auto" />
        </View>
    );
}
