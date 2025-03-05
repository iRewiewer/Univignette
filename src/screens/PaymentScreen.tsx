import React from 'react';
import { View, StyleSheet, Platform } from 'react-native';
import ApplePay from '../components/ApplePay';
import GooglePayButton from '../components/GooglePay';

const PaymentScreen: React.FC = () => {
    return (
        <View style={styles.container}>
            {Platform.OS === 'ios' ? (
                <ApplePay onPaymentSuccess={() => { }} onPaymentError={() => { }} />
            ) : Platform.OS === 'android' ? (
                <GooglePayButton onPaymentSuccess={() => { }} onPaymentError={() => { }} />
            ) : (
                <View style={styles.row}>
                    <ApplePay onPaymentSuccess={() => { }} onPaymentError={() => { }} />
                    <GooglePayButton onPaymentSuccess={() => { }} onPaymentError={() => { }} />
                </View>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff',
    },
    title: {
        fontSize: 24,
        marginBottom: 20,
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '100%',
    },
});

export default PaymentScreen;
