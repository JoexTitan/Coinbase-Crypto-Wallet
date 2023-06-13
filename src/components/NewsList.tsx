import React, { FC } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
} from 'react-native';

import NewsListItem from './NewsListItem';
import News from '../models/News';
import Colors from '../constants/Colors';

// Define the type for the props passed to the NewsList component
interface NewsProps {
    newsData: News[]; // Array of News objects
    isHomeScreen: boolean; // Indicates if the component is rendered on the home screen
    viewMoreHandler?: any; // Optional function to handle "View more" button press
}

const NewsList: FC<NewsProps> = ({ 
    newsData, 
    isHomeScreen,
    viewMoreHandler,
}) => {
    return (
        <View style={{width: '100%', alignSelf: 'flex-start'}}>
            {isHomeScreen && (
                // Rendering the list header only if the component is rendered on the home screen
                <View style={styles.listHeader}>
                    <Text style={styles.newsText}>News</Text>
                    <TouchableOpacity onPress={viewMoreHandler}>
                        <Text selectable style={styles.viewMoreButton}>
                            View more
                        </Text>
                    </TouchableOpacity>
                </View>
            )}
            <FlatList 
                // Passing the news data to the FlatList component
                data={isHomeScreen ? newsData.slice(0, 5) : newsData}
                showsVerticalScrollIndicator={false}
                // Using the URL as the unique key for each item
                keyExtractor={(item) => item.url} 
                style={{ marginHorizontal: 8}}
                renderItem={({ item }) => {
                    return (
                        // Rendering each news item using the NewsListItem component
                        <NewsListItem 
                            newsOutlet={item.newsOutlet}
                            date={item.date}
                            title={item.title}
                            image={item.image}
                            url={item.url}
                        />
                    )
                }}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    listHeader: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginTop: 32,
      marginBottom: 10,
      marginHorizontal: '6%',
    },
    newsText: {
      fontSize: 20,
      fontWeight: '600',
    },
    viewMoreButton: {
      color: Colors.cbBlue,
      fontSize: 18,
      fontWeight: '600',
    },
});

export default NewsList;
