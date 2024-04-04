import React from 'react';
import { StyleSheet, View } from 'react-native';

export default function Pilar() {
    return (
        <View style={styles.pontos}>
            <View style={styles.ponto1}></View>
            <View style={styles.ponto2}></View>
            <View style={styles.ponto3}></View>
        </View>
    );
}

const styles = StyleSheet.create({
    pontos: {
        flex: 1,
        justifyContent: 'space-between',
    },
    ponto1: {
        width: 100,
        height: 100,
        backgroundColor: 'red',
    },
    ponto2: {
        width: 100,
        height: 100,
        backgroundColor: 'blue',
    },
    ponto3: {
        width: 100,
        height: 100,
        backgroundColor: 'green',
    },
});
