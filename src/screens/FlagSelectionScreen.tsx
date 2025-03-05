import React from 'react';
import { FlatList, StyleSheet } from 'react-native';
import Header from '../components/Header';
import Footer from '../components/Footer';
import FlagBubble from '../components/FlagBubble';
import { vignetteCountries } from '../constants/Countries';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/AppNavigator';

type NavigationProp = NativeStackNavigationProp<RootStackParamList, 'FlagSelection'>;

const FlagSelectionScreen: React.FC = () => {
    const navigation = useNavigation<NavigationProp>();

    const renderItem = ({ item }: { item: any }) => (
        <FlagBubble
            country={item}
            onPress={() => navigation.navigate('TicketSelection', { countryCode: item.code })}
        />
    );

    return (
        <>
            <FlatList
                data={vignetteCountries}
                keyExtractor={(item) => item.code}
                renderItem={renderItem}
                numColumns={2}
                contentContainerStyle={styles.container}
            />
        </>
    );
};

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        padding: 20,
    },
});

export default FlagSelectionScreen;
