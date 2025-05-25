import { useState } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Button } from 'rn-palette-ui/Button';

const result = 144 * 7;

export default function App() {
    const [showResult, setShowResult] = useState(false);

    return (
        <View style={styles.container}>
            {showResult && <Text>Result: {result}</Text>}
            <Button onPress={() => setShowResult(true)} type="round" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
});
