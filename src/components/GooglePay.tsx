import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import GooglePay from 'react-native-google-pay';

const allowedCardNetworks = ['VISA', 'MASTERCARD'];
const allowedCardAuthMethods = ['PAN_ONLY', 'CRYPTOGRAM_3DS'];

const GooglePayButton: React.FC = () => {
    const handleGooglePay = () => {
        const requestData = {
            cardPaymentMethod: {
                tokenizationSpecification: {
                    type: 'PAYMENT_GATEWAY',
                    parameters: {
                        gateway: 'stripe',
                        'stripe:publishableKey': 'your-publishable-key',
                        'stripe:version': '2018-11-08',
                    },
                },
                allowedCardNetworks,
                allowedCardAuthMethods,
            },
            transaction: {
                totalPrice: '10.00',
                totalPriceStatus: 'FINAL',
                currencyCode: 'USD',
            },
            merchantName: 'Your Merchant Name',
        };

        GooglePay.setEnvironment(GooglePay.ENVIRONMENT_TEST);

        GooglePay.isReadyToPay(allowedCardNetworks, allowedCardAuthMethods)
            .then((ready: boolean) => {
                if (ready) {
                    GooglePay.requestPayment(requestData)
                        .then((token: any) => {
                            console.log('GooglePay token:', token);
                        })
                        .catch((error: any) => {
                            console.warn('GooglePay error:', error);
                        });
                } else {
                    console.warn('Google Pay is not available on this device');
                }
            });
    };

    return (
        <TouchableOpacity style={styles.button} onPress={handleGooglePay}>
            <Text style={styles.buttonText}>GooglePay</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    button: {
        backgroundColor: '#4285f4',
        paddingVertical: 15,
        paddingHorizontal: 30,
        borderRadius: 10,
        marginVertical: 10,
    },
    buttonText: {
        color: '#fff',
        fontSize: 18,
    },
});

export default GooglePayButton;
