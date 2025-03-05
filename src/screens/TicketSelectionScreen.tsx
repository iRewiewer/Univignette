import React, { useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { RouteProp, useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

import { Country, vignetteCountries } from '../constants/Countries';
import { tickets as ticketsData } from '../constants/Tickets';
import { RootStackParamList } from '../navigation/AppNavigator';

type TicketSelectionScreenRouteProp = RouteProp<RootStackParamList, 'TicketSelection'>;
type NavigationProp = NativeStackNavigationProp<RootStackParamList, 'TicketSelection'>;

interface Props {
    route: TicketSelectionScreenRouteProp;
}

const getCountryByCode = (code: string): Country | undefined =>
    vignetteCountries.find(country => country.code === code);

const TicketSelectionScreen: React.FC<Props> = ({ route }) => {
    const navigation = useNavigation<NavigationProp>();
    const { countryCode } = route.params;
    const country = getCountryByCode(countryCode);

    // Update the native title dynamically once the country is loaded.
    useEffect(() => {
        if (country) {
            navigation.setOptions({ title: `Select Ticket for ${country.name}` });
        }
    }, [navigation, country]);

    // Retrieve ticket info for the selected country.
    const countryTickets = ticketsData[countryCode];

    // Convert tickets object into an array for FlatList.
    const ticketOptions = countryTickets
        ? Object.entries(countryTickets.tickets).map(([ticketType, ticket]) => ({
            ticketType,
            ...ticket,
        }))
        : [];

    const handleTicketPress = (item: { ticketType: string; name: string; currency: string }) => {
        navigation.navigate('Payment', {
            countryCode,
            ticketType: item.ticketType,
            ticketName: item.name,
            ticketCurrency: item.currency,
        });
    };

    const renderTicket = ({ item }: { item: { ticketType: string; name: string; currency: string } }) => (
        <TouchableOpacity style={styles.ticketCard} onPress={() => handleTicketPress(item)}>
            <Text style={styles.ticketName}>{item.name}</Text>
            <Text style={styles.ticketCurrency}>{item.currency}</Text>
        </TouchableOpacity>
    );

    return (
        <View style={styles.screenContainer}>
            <FlatList
                data={ticketOptions}
                keyExtractor={(item) => item.ticketType}
                renderItem={renderTicket}
                numColumns={2}
                contentContainerStyle={styles.ticketContainer}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    screenContainer: {
        flex: 1,
        backgroundColor: '#fff',
    },
    ticketContainer: {
        alignItems: 'center',
        padding: 20,
    },
    ticketCard: {
        width: 150,
        height: 100,
        borderRadius: 10,
        backgroundColor: '#e0e0e0',
        justifyContent: 'center',
        alignItems: 'center',
        margin: 10,
        padding: 10,
    },
    ticketName: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    ticketCurrency: {
        fontSize: 16,
        marginTop: 5,
    },
});

export default TicketSelectionScreen;
