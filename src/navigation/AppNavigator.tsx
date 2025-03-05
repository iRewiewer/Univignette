import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import FlagSelectionScreen from '../screens/FlagSelectionScreen';
import TicketSelectionScreen from '../screens/TicketSelectionScreen';
import PaymentScreen from '../screens/PaymentScreen';

export type RootStackParamList = {
    FlagSelection: undefined;
    TicketSelection: { countryCode: string };
    Payment: {
        countryCode: string;
        ticketType: string;
        ticketName: string;
        ticketCurrency: string;
    };
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const AppNavigator: React.FC = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="FlagSelection">
                <Stack.Screen
                    name="FlagSelection"
                    component={FlagSelectionScreen}
                    options={{ title: 'Select Country' }}
                />
                <Stack.Screen
                    name="TicketSelection"
                    component={TicketSelectionScreen}
                    options={{ title: 'Select Ticket' }}
                />
                <Stack.Screen
                    name="Payment"
                    component={PaymentScreen}
                    options={{ title: 'Payment' }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default AppNavigator;
