import React, { FC } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableHighlight,
} from 'react-native';
import * as WebBrowser from 'expo-web-browser';
import Colors from '../constants/Colors';

// Defining the type for the props passed to the NewsListItem component
interface NewsListItemProps {
    newsOutlet: string; // The news outlet name
    date: string; // The publication date
    title: string; // The news article title
    image: string; // The URL of the news article image
    url: string; // The URL of the full news article
}

const NewsListItem: FC<NewsListItemProps> = ({
    newsOutlet,
    date,
    title,
    image,
    url,
}) => {

    // Function to handle the press event of a news item
    const handleNewsPress = async (url: string) => {
        await WebBrowser.openBrowserAsync(url, {
            readerMode: true,
            controlsColor: Colors.cbBlue,
            dismissButtonStyle: 'close',
            toolbarColor: 'white',
        });
    };

    return (
        <TouchableHighlight
            style={styles.listItem}
            underlayColor='#FBFAFB'
            onPress={() => handleNewsPress(url)}
        >
            <View style={{ flexDirection: 'row', justifyContent: 'space-between'}}>
                <View style={styles.textContainer}>
                    <Text style={styles.header}>
                        {newsOutlet} <Text style={styles.bulletPoint}>•</Text> {date}
                    </Text>
                    <Text selectable style={styles.title}>{title}</Text>
                </View>
                <Image
                    source={{ uri: image }} style={styles.image}
                />
            </View>
        </TouchableHighlight>
    )
}

const styles = StyleSheet.create({
    listItem: {
        justifyContent: 'center',
        paddingHorizontal: '4%',
        paddingVertical: '4%',
        borderRadius: 8,
      },
    textContainer: {
        width: '75%',
    },
    header: {
        color: 'rgb(91, 96, 109)',
        fontSize: 16,
        marginBottom: 5,
    },
    image: {
        width: 67,
        height: 67,
        borderRadius: 8,
        alignSelf: 'center',
        borderWidth: 0.5,
        borderColor: '#ccc',
      },
      bulletPoint: {
          fontWeight: 'bold',
          fontSize: 18,
      },
      title: {
        fontSize: 17,
        lineHeight: 25,
      },
});

export default NewsListItem;
