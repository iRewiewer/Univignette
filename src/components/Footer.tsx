import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface FooterProps {
    text: string;
}

const Footer: React.FC<FooterProps> = ({ text }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>{text}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        width: '100%',
        padding: 10,
        backgroundColor: '#f8f8f8',
        alignItems: 'center',
        justifyContent: 'center',
        borderTopWidth: 1,
        borderTopColor: '#ddd',
    },
    text: {
        fontSize: 16,
    },
});

export default Footer;
