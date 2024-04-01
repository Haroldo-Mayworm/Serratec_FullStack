import { Button } from 'react-native';

const myFunction = () => {
    console.log('CHECK');
};

function Btn() {
    return <Button title="click here" onPress={myFunction} />;
}

export default Btn;
