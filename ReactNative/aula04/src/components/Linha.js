import React from 'react';
import { StyleSheet, View } from 'react-native';

export default function Pilar() {
    return <View style={styles.linha}></View>;
}

const styles = StyleSheet.create({
    linha: {
        backgroundColor: 'black',
        width: '100%',
        height: 100,
    },
});
