import React from 'react';
import { TouchableOpacity, Image, StyleSheet } from 'react-native';
import { Country } from '../constants/Countries';

interface FlagBubbleProps {
    country: Country;
    onPress: () => void;
}

const FlagBubble: React.FC<FlagBubbleProps> = ({ country, onPress }) => {
    return (
        <TouchableOpacity style={styles.flagBubble} onPress={onPress}>
            <Image source={{ uri: country.flag }} style={styles.flag} />
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    flagBubble: {
        width: 80,
        height: 80,
        borderRadius: 40,
        backgroundColor: '#f0f0f0',
        justifyContent: 'center',
        alignItems: 'center',
        margin: 10,
        elevation: 5,
    },
    flag: {
        width: 60,
        height: 40,
        borderRadius: 5,
    },
});

export default FlagBubble;
