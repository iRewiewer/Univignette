import React from 'react';
import {
    TouchableOpacity,
    StyleSheet,
    Platform,
    requireNativeComponent,
    View,
} from 'react-native';
import { PaymentRequest } from 'react-native-payments';

interface Props {
    onPaymentSuccess: (paymentResponse: any) => void;
    onPaymentError: (error: any) => void;
}

const NativeApplePayButton = Platform.OS === 'ios' ? requireNativeComponent('PKPaymentButton') : null;

const ApplePay: React.FC<Props> = ({ onPaymentSuccess, onPaymentError }) => {
    const handleApplePay = () => {
        const methodData = [{
            supportedMethods: ['apple-pay'],
            data: {
                merchantIdentifier: 'merchant.com.your.id', // Replace with your merchant ID
                supportedNetworks: ['visa', 'mastercard', 'amex'],
                countryCode: 'US',
                currencyCode: 'USD',
                paymentMethodTokenizationParameters: {
                    tokenizationType: 'PAYMENT_GATEWAY',
                    parameters: {
                        gateway: 'stripe',
                        'stripe:publishableKey': 'your-publishable-key', // Replace with your key
                        'stripe:version': '2018-11-08',
                    },
                },
            },
        }];

        const details = {
            id: 'vignette-ticket',
            displayItems: [{
                label: 'Vignette Ticket',
                amount: { currency: 'USD', value: '10.00' },
            }],
            total: {
                label: 'Your Merchant Name',
                amount: { currency: 'USD', value: '10.00' },
            },
        };

        const paymentRequest = new PaymentRequest(methodData, details);

        paymentRequest.show()
            .then((paymentResponse: any) => {
                console.log('ApplePay response:', paymentResponse);
                onPaymentSuccess(paymentResponse);
                paymentResponse.complete('success');
            })
            .catch((error: any) => {
                console.warn('ApplePay error:', error);
                onPaymentError(error);
            });
    };

    if (Platform.OS !== 'ios' || !NativeApplePayButton) {
        return null;
    }

    return (
        <TouchableOpacity style={styles.container} onPress={handleApplePay}>
            <View style={styles.nativeButton}>
                <NativeApplePayButton />
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    container: {
        // Optional styling for the container
    },
    nativeButton: {
        width: 200,
        height: 44,
    },
});

export default ApplePay;
