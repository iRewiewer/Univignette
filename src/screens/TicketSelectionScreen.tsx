import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { RouteProp, useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

import { Country, vignetteCountries } from '../constants/Countries';
import { tickets as ticketsData } from '../constants/Tickets';
import Header from '../components/Header';
import Footer from '../components/Footer';
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
    const countryTickets = ticketsData[countryCode];
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
            <Header title={`Ticket Selection for ${country?.name || ''}`} />
            <FlatList
                data={ticketOptions}
                keyExtractor={(item) => item.ticketType}
                renderItem={renderTicket}
                numColumns={2}
                contentContainerStyle={styles.ticketContainer}
            />
            <Footer text="Univignette © 2025" />
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
