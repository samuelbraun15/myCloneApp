import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  Alert,
  StatusBar,
} from 'react-native';

// Color Palette (approximations from Spotify's dark theme)
const COLORS = {
  background: '#121212', // Very dark grey / black
  surface: '#181818', // Slightly lighter for elements like top bar
  card: '#282828', // Dark grey for cards
  textPrimary: '#FFFFFF', // White
  textSecondary: '#B3B3B3', // Light grey
  accent: '#1DB954', // Spotify green
  border: '#535353', // For button borders etc.
};

const App = () => {
  const handleFollowPress = () => {
    Alert.alert('Assignment 1 Completed');
  };

  // Placeholder for artist data for Credits section
  const creditsData = [
    {
      name: 'Leon Thomas',
      role: 'Main Artist, Composer',
      id: '1',
    },
    {
      name: 'Freddie Gibbs',
      role: 'Main Artist',
      id: '2',
    },
    {
      name: 'D. Phelps',
      role: 'Composer, Producer',
      id: '3',
    },
  ];

  // Placeholder for Explore cards
  const exploreCards = [
    { title: 'X songs by Leon Thomas', id: 'e1', bgColor: '#503A9A' }, // Example placeholder color
    { title: 'Similar to Leon Thomas', id: 'e2', bgColor: '#A04030' },
    { title: 'Similar to MUTT (feat. Fre...', id: 'e3', bgColor: '#30A050' },
  ];

  return (
    <View style={styles.appContainer}>
      <StatusBar barStyle="light-content" backgroundColor={COLORS.background} />
      <ScrollView style={styles.scrollView}>
        {/* Top Bar (Current Song Info) */}
        <View style={styles.topBar}>
          <View style={styles.songInfo}>
            <Text style={styles.songTitle}>
              MUTT (feat. Freddie Gibbs) [Ren...
            </Text>
            <Text style={styles.artistName}>Leon Thomas, Freddie Gibbs</Text>
          </View>
          <View style={styles.topBarIcons}>
            <TouchableOpacity style={styles.iconButton}>
              <Text style={styles.iconText}>⊕</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.iconButton}>
              <Text style={styles.iconText}>||</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Explore Leon Thomas Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Explore Leon Thomas</Text>
          <ScrollView
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            style={styles.horizontalScroll}>
            {exploreCards.map((card) => (
              <View key={card.id} style={[styles.exploreCard, {backgroundColor: card.bgColor}]}>
                {/* Image Placeholder */}
                <View style={styles.cardImagePlaceholder} />
                <Text style={styles.exploreCardText}>{card.title}</Text>
              </View>
            ))}
          </ScrollView>
        </View>

        {/* Credits Section */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Credits</Text>
            <TouchableOpacity>
              <Text style={styles.showAllText}>Show all</Text>
            </TouchableOpacity>
          </View>
          {creditsData.map((credit, index) => (
            <View key={credit.id} style={styles.creditItem}>
              <View style={styles.creditInfo}>
                <Text style={styles.creditName}>{credit.name}</Text>
                <Text style={styles.creditRole}>{credit.role}</Text>
              </View>
              <TouchableOpacity
                style={styles.followButton}
                // Make the first follow button trigger the alert for the assignment
                onPress={index === 0 ? handleFollowPress : undefined}>
                <Text style={styles.followButtonText}>Follow</Text>
              </TouchableOpacity>
            </View>
          ))}
        </View>

        {/* Live events Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Live events</Text>
          <View style={styles.liveEventsPlaceholder}>
            <Text style={styles.placeholderText}>Large Image/Content Area</Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  scrollView: {
    flex: 1,
  },
  // TOP BAR STYLES
  topBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 15,
    backgroundColor: COLORS.surface, // Or a slightly different shade
    borderBottomWidth: 1,
    borderBottomColor: '#000', // Subtle separator if needed
  },
  songInfo: {
    flex: 1,
    marginRight: 10,
  },
  songTitle: {
    color: COLORS.textPrimary,
    fontSize: 16,
    fontWeight: 'bold',
  },
  artistName: {
    color: COLORS.textSecondary,
    fontSize: 12,
  },
  topBarIcons: {
    flexDirection: 'row',
  },
  iconButton: {
    marginLeft: 15,
    padding: 5,
  },
  iconText: {
    color: COLORS.textPrimary,
    fontSize: 20, // Adjust as needed for icon appearance
  },
  // GENERAL SECTION STYLES
  section: {
    marginTop: 20,
    paddingHorizontal: 15,
  },
  sectionTitle: {
    color: COLORS.textPrimary,
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  showAllText: {
    color: COLORS.accent,
    fontSize: 14,
    fontWeight: 'bold',
  },
  // EXPLORE SECTION STYLES
  horizontalScroll: {
    flexDirection: 'row',
  },
  exploreCard: {
    width: 140,
    height: 180, // Adjusted to fit image placeholder and text
    borderRadius: 8,
    marginRight: 15,
    padding: 10,
    justifyContent: 'space-between', // To push text to bottom
  },
  cardImagePlaceholder: {
    width: '100%',
    height: 100, // Size of the image area within the card
    backgroundColor: COLORS.surface, // Darker placeholder for image
    borderRadius: 4, // Slightly rounded corners for image area
    marginBottom: 8,
  },
  exploreCardText: {
    color: COLORS.textPrimary,
    fontSize: 13,
    fontWeight: '600', // Semi-bold
  },
  // CREDITS SECTION STYLES
  creditItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.card, // Subtle separator
  },
  creditInfo: {
    flex: 1,
  },
  creditName: {
    color: COLORS.textPrimary,
    fontSize: 16,
    fontWeight: '500',
  },
  creditRole: {
    color: COLORS.textSecondary,
    fontSize: 12,
  },
  followButton: {
    borderColor: COLORS.border,
    borderWidth: 1,
    borderRadius: 20, // Pill shape
    paddingVertical: 6,
    paddingHorizontal: 15,
    backgroundColor: 'transparent',
  },
  followButtonText: {
    color: COLORS.textPrimary,
    fontSize: 13,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  // LIVE EVENTS SECTION STYLES
  liveEventsPlaceholder: {
    height: 150,
    backgroundColor: COLORS.card,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20, // Space at the bottom of the scroll view
  },
  placeholderText: {
    color: COLORS.textSecondary,
    fontSize: 14,
  }
});

export default App;