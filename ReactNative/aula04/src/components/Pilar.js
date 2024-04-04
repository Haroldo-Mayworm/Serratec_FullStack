import React from 'react';
import { StyleSheet, View } from 'react-native';

export default function Pilar() {
    return <View style={styles.pilar}></View>;
}

const styles = StyleSheet.create({
    pilar: {
        backgroundColor: 'red',
        width: 100,
        height: '100%',
    },
});
