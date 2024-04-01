import { StyleSheet } from 'react-native';

export const COLORS = {
    white: '#fff',
    black: '#000',
    blue: '#02066F',
    primary: '#60D9FA',
};

export default StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        fontSize: 20,
        color: COLORS.black,
    },
    img: {
        width: 200,
        height: 200,
    },
    btn: {
        backgroundColor: COLORS.primary,
        padding: 10,
        margin: 10,
        borderRadius: 5,
    },
    tema1: {backgroundColor: 'black'},
    tema2: {backgroundColor: 'white'}
});
