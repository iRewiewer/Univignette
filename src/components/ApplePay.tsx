import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { PaymentRequest } from 'react-native-payments';

const ApplePay: React.FC = () => {
    const handleApplePay = () => {
        const methodData = [{
            supportedMethods: ['apple-pay'],
            data: {
                merchantIdentifier: 'merchant.com.your.id',
                supportedNetworks: ['visa', 'mastercard', 'amex'],
                countryCode: 'US',
                currencyCode: 'USD',
                paymentMethodTokenizationParameters: {
                    tokenizationType: 'PAYMENT_GATEWAY',
                    parameters: {
                        gateway: 'stripe',
                        'stripe:publishableKey': 'your-publishable-key',
                        'stripe:version': '2018-11-08'
                    }
                }
            }
        }];

        const details = {
            id: 'vignette-ticket',
            displayItems: [{
                label: 'Vignette Ticket',
                amount: { currency: 'USD', value: '10.00' }
            }],
            total: {
                label: 'Your Merchant Name',
                amount: { currency: 'USD', value: '10.00' }
            }
        };

        const paymentRequest = new PaymentRequest(methodData, details);

        paymentRequest.show()
            .then((paymentResponse: any) => {
                console.log('ApplePay response:', paymentResponse);
                paymentResponse.complete('success');
            })
            .catch((error: any) => {
                console.warn('ApplePay error:', error);
            });
    };

    return (
        <TouchableOpacity style={styles.button} onPress={handleApplePay}>
            <Text style={styles.buttonText}>ApplePay</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    button: {
        backgroundColor: '#007aff',
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

export default ApplePay;
