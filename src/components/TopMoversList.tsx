import React, { FC } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import Coin from '../models/Coin';

import TopMoversListItem from './TopMoversListItem';

interface TopMoversProps {
    coinData: Coin[];
}

// Define the TopMovers component
const TopMovers: FC<TopMoversProps> = ({ coinData }) => {

    return (
        <View style={styles.list}>
            {/* Displaying the text for top crypto movers */}
            <Text style={styles.topMoversText}>Top Movers</Text>
            <FlatList
                data={coinData}
                keyExtractor={(item) => item.id.toString()}
                horizontal
                showsHorizontalScrollIndicator={false}
                // Snap the items to specific offsets for horizontal scrolling
                snapToOffsets={[...Array(coinData.length)].map((x, i) => 158 * i + 162)}
                decelerationRate={0}
                snapToAlignment="center"
                contentContainerStyle={styles.topMoversContainer}
                // Rendering each item in the flat list
                renderItem={({ item }) => {
                    return (
                        // Displaying the TopMoversListItem component for each item
                        <TopMoversListItem
                            id={item.id}
                            symbol={item.symbol}
                            price={item.price}
                            percentChange={item.percentChange}
                        />
                    );
                }}
            />
        </View>
    );
}

// Defining the styles for the TopMovers component
const styles = StyleSheet.create({
    topMoversText: {
        fontWeight: '600',
        fontSize: 21,
        marginTop: 32,
        marginBottom: 10,
        marginLeft: '6%',
    },
    topMoversContainer: {
        height: 160,
        paddingLeft: '6%',
    },
    list: {
        width: '100%',
        alignSelf: 'flex-start',
    },
});

export default TopMovers;
