// Authors: Merilyne Mbong, Samuel Braun, Anne Marie Ala 
// Date: 2025-06-01
// Description: React Native app that mimics a music player interface similar to Spotify.
// Class: CPRG303B
// Instructor: SOla Akinbode

import React from 'react';


import {
  StyleSheet,
  Image,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  Alert,
  StatusBar,
  ImageBackground,
  Dimensions,
} from 'react-native';

const { width, height } = Dimensions.get('window');
const localSource = require('./assets/mutt.mp4'); // video for background 

// Color Palette (approximations from Spotify's dark theme)
const COLORS = {
  background: '#121212', // Very dark grey / black
  surface: '#181818', // Slightly lighter for elements like top bar
  card: '#282828', // Dark grey for cards
  textPrimary: '#FFFFFF', // White
  textSecondary: '#B3B3B3', // Light grey
  accent: '#1DB954', // Spotify green
  border: '#535353', // For button borders etc.
  overlay: 'rgba(0, 0, 0, 0.5)', // For background overlay
};

const App = () => {
  const handleFollowPress = () => {
    Alert.alert('Assignment 1 Completed');
  };

  const handlePlayPress = () => {
    Alert.alert('Play Button Pressed', 'Music player controls clicked!');
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
    { title: 'X songs by Leon Thomas', 
      id: 'e1', 
      bgColor: '#503A9A',
      image: require('./assets/dancing-gif.gif') 

    },
    { title: 'Similar to Leon Thomas', 
      id: 'e2', 
      bgColor: '#A04030',
      image: require('./assets/pexels-cottonbro-9419400explore.jpg') 
    }, 

    { title: 'Similar to MUTT', 
      id: 'e3', 
      bgColor: '#30A050', 
      image: require('./assets/musicians.gif') 
},
  ];

  return (
    <View style={styles.appContainer}>
      <StatusBar barStyle="light-content" backgroundColor={COLORS.background} />
      <ScrollView style={styles.scrollView}>
        {/* Full Screen Music Player */}
        <ImageBackground
          source={require('./assets/mutt.gif')}
          style={styles.playerBackground}
          resizeMode="cover"
        >

          
          <View style={styles.playerOverlay}>

            {/* Header */}
            <View style={styles.playerHeader}>
              <TouchableOpacity style={styles.headerButton}>
                <Text style={styles.headerIcon}>‹</Text>
              </TouchableOpacity>
              <Text style={styles.headerTitle}>"mutt leon" in Search</Text>
              <TouchableOpacity style={styles.headerButton}>
                <Text style={styles.headerIcon}>⋯</Text>
              </TouchableOpacity>
            </View>

            {/* Spacer to push content down */}
            <View style={styles.playerSpacer} />

            {/* Song Info */}
            <View style={styles.songInfoContainer}>
              <View style={styles.albumArtContainer}>
                <ImageBackground
                  source={require('./assets/mutt-2.png')}
                  style={styles.albumArt}
                  resizeMode="cover"
                >
                  <Text style={styles.explicitBadge}>E</Text>
                </ImageBackground>
              </View>
              <View style={styles.songDetails}>
                <Text style={styles.songTitleLarge}>MUTT</Text>
                <Text style={styles.artistNameLarge}>Leon Thomas</Text>
              </View>
              <TouchableOpacity style={styles.addButton}>
                <Text style={styles.addButtonIcon}>⊕</Text>
              </TouchableOpacity>
            </View>

            {/* Progress Bar */}
            <View style={styles.progressContainer}>
              <View style={styles.progressBar}>
                <View style={styles.progressFill} />
                <View style={styles.progressThumb} />
              </View>
              <View style={styles.timeContainer}>
                <Text style={styles.timeText}>0:00</Text>
                <Text style={styles.timeText}>-3:12</Text>
              </View>
            </View>

            {/* Music Controls */}
            <View style={styles.controlsContainer}>
              {/* shuffle */}
              <TouchableOpacity style={styles.controlButton}>
                <Image 
                source={require('./assets/shuffle-icon.png')}
                style={styles.iconImage}
                />              
              </TouchableOpacity>
                {/* rewind */}
              <TouchableOpacity style={styles.controlButton}>
                <Image 
                source={require('./assets/back.png')}
                style={styles.iconImage}
                />
              </TouchableOpacity>
              {/* play */}
              <TouchableOpacity style={styles.playButton} onPress={handlePlayPress}>
                <Text style={styles.playIcon}>▶</Text>
              </TouchableOpacity>
              {/* forward */}
              <TouchableOpacity style={styles.controlButton}>
                <Image 
                source={require('./assets/next.png')}
                style={styles.iconImage}
                />
              </TouchableOpacity>
              {/* repeat */}
              <TouchableOpacity style={styles.controlButton}>
                <Image 
                source={require('./assets/repeat.png')}
                style={styles.iconImage}
                />
              </TouchableOpacity>
            </View>

            {/* Bottom Actions */}
            <View style={styles.bottomActions}>
    
              {/* share */}
              <TouchableOpacity style={styles.bottomButton}>
                <Image 
                source={require('./assets/share.png')}
                style={styles.iconImage}
                />
              </TouchableOpacity>
              {/* queue */}
              <TouchableOpacity style={styles.bottomButton}>
                <Text style={styles.bottomIcon}>☰</Text>
              </TouchableOpacity>
            </View>
      

            {/* Lyrics Section */}
           <ScrollView style={styles.lyricContainer}>
   
            <View style={styles.lyricsSection}>
              <View style={styles.lyricsHeader}>
                
                <Text style={styles.lyricsTitle}>Lyrics</Text>
                
                <TouchableOpacity style={styles.lyricsButton}>
                  <Text style={styles.lyricsIcon}>↗</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.lyricsButton}>
                  <Text style={styles.lyricsIcon}>⛶</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.lyricsProgress} />
                        {/* Lyrics Content */}
        <View style={styles.lyricsContent}>
          <Text style={styles.lyricsLine}>
          She said, "Take your time, what's the rush?"
          </Text>

          <Text style={styles.lyricsLine2}>
          I said, "Baby I'm a dog, I'm a mutt."
          </Text>
          

        </View>
      
            </View>
              </ScrollView>
          </View>
          


        </ImageBackground>
                          {/* Spacer to push content down */}
            <View style={styles.lyricSpacer} />

        {/* Original Content */}
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
      <ImageBackground
        key={card.id}
        source={card.image}
        style={styles.exploreCard}
        imageStyle={styles.cardImageBackground}
        resizeMode="cover"
      >
        <Text style={styles.exploreCardText}>{card.title}</Text>
      </ImageBackground>
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
                onPress={index === 0 ? handleFollowPress : undefined}>
                <Text style={styles.followButtonText}>Follow</Text>
              </TouchableOpacity>
            </View>
          ))}
        </View>

{/* Live events Section */}
{/* Live events Section */}
<View style={styles.section}>
  <Text style={styles.sectionTitle}>Live events</Text>
  <View style={styles.liveEventsContainer}>
    <ImageBackground
      source={require('./assets/pexels-jibarofoto-3727138.jpg')}
      style={styles.liveEventsImage}
      resizeMode="cover"
    >
      {/* Dark overlay for text readability */}
      <View style={styles.liveEventsOverlay}>
        {/* Artist name at bottom left */}
        <View style={styles.liveEventsContent}>
          <Text style={styles.liveEventsArtist}>Leon Thomas</Text>
          <Text style={styles.liveEventsDate}>Jun 12 — Sep 12</Text>
          <Text style={styles.liveEventsCount}>5 events</Text>
        </View>
        
        {/* Find tickets button at bottom right */}
        <TouchableOpacity style={styles.findTicketsButton}>
          <Text style={styles.findTicketsText}>Find tickets</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
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

  // MUSIC PLAYER STYLES
  playerBackground: {
    width: width,
    height: height,
    justifyContent: 'flex-end',
  top: 0,
  left: 0,
  zIndex: 1000,
  
  },

  playerOverlay: {
    flex: 1,
    backgroundColor: COLORS.overlay,
    paddingHorizontal: 20,
    paddingTop: 50,
    paddingBottom: 30,
  },
  playerHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  headerButton: {
    padding: 10,
  },
  headerIcon: {
    color: COLORS.textPrimary,
    fontSize: 24,
    fontWeight: 'bold',
  },
  headerTitle: {
    color: COLORS.textPrimary,
    fontSize: 16,
    fontWeight: '600',
  },
  playerSpacer: {
    flex: 3, // Even more space
    minHeight: 300,
  },
    lyricSpacer: {
    flex: 1, // Even more space
    minHeight: 50,
  },
  songInfoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 30,
  },
  albumArtContainer: {
    position: 'relative',
  },
  albumArt: {
    width: 60,
    height: 60,
    borderRadius: 8,
    overflow: 'hidden',
    justifyContent: 'flex-end',
    alignItems: 'flex-start',
  },
  explicitBadge: {
    backgroundColor: COLORS.textSecondary,
    color: COLORS.background,
    fontSize: 10,
    fontWeight: 'bold',
    paddingHorizontal: 4,
    paddingVertical: 1,
    margin: 4,
    borderRadius: 2,
  },
  songDetails: {
    flex: 1,
    marginLeft: 15,
  },
  songTitleLarge: {
    color: COLORS.textPrimary,
    fontSize: 24,
    fontWeight: 'bold',
  },
  artistNameLarge: {
    color: COLORS.textSecondary,
    fontSize: 16,
    marginTop: 2,
  },
  addButton: {
    padding: 10,
  },
  addButtonIcon: {
    color: COLORS.textPrimary,
    fontSize: 24,
  },
  progressContainer: {
    marginBottom: 30,
  },
  progressBar: {
    height: 4,
    backgroundColor: COLORS.border,
    borderRadius: 2,
    marginBottom: 8,
    position: 'relative',
  },
  progressFill: {
    width: '5%',
    height: '100%',
    backgroundColor: COLORS.textPrimary,
    borderRadius: 2,
  },
  progressThumb: {
    position: 'absolute',
    left: '5%',
    top: -4,
    width: 12,
    height: 12,
    backgroundColor: COLORS.textPrimary,
    borderRadius: 6,
  },
  timeContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  timeText: {
    color: COLORS.textSecondary,
    fontSize: 12,
  },
  controlsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 2,
  
  },
  controlButton: {
    padding: 10,
  },
  controlIcon: {
    color: COLORS.textPrimary,
    fontSize: 24,
  },
  playButton: {
    width: 70,
    height: 70,
    borderRadius: 35,
    backgroundColor: COLORS.textPrimary,
    justifyContent: 'center',
    alignItems: 'center',
  },
  playIcon: {
    color: COLORS.background,
    fontSize: 24,
    marginLeft: 4,
  },
  bottomActions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    
    paddingVertical: 5,
   
  },
  bottomButton: {
    padding: 15,
  },
  bottomIcon: {
    color: COLORS.textPrimary,
    fontSize: 20,
  },
  lyricsSection: {
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    borderRadius: 16,
    padding: 40,
    minHeight: height * 0.3, // 30% of screen height
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.1)',


  },
  lyricsHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,

  },
  lyricsTitle: {
    color: COLORS.textPrimary,
    fontSize: 16,
    fontWeight: 'bold',
    flex: 1,
  },
  lyricsButton: {
    marginLeft: 16,
    padding: 8,
    borderRadius: 20,
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    width: 36,
    height: 36,
    justifyContent: 'center',
    alignItems: 'center',
  },
  lyricsIcon: {
    color: COLORS.textPrimary,
    fontSize: 16,
    fontWeight: '500',
  },
  
  lyricsContent: {
  paddingTop: 8,
  },
    lyricsLine: {
    color: COLORS.textPrimary,
    fontSize: 18,
    lineHeight: 26,
    marginBottom: 12,
    fontWeight: '600',
  },
      lyricsLine2: {
    color: COLORS.textPrimary,
    fontSize: 18,
    lineHeight: 26,
    marginBottom: 12,
    fontWeight: '400',
  },
  currentLyricsLine: {
    fontWeight: '600',
    color: '#FFFFFF',
    textShadowColor: 'rgba(255, 255, 255, 0.3)',
    textShadowOffset: { width: 0, height: 0 },
    textShadowRadius: 4,
  },
  fadedLyricsLine: {
    color: COLORS.textSecondary,
    opacity: 0.7,
  },
  lyricsProgress: {
    height: 4,
    backgroundColor: COLORS.border,
    borderRadius: 2,
    marginTop: 10,
  },
  lyricContainer:{
    marginTop: 8,
  minHeight: 120, // Make scroll area taller
  },

  // ORIGINAL STYLES
  topBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 15,
    backgroundColor: COLORS.surface,
    borderBottomWidth: 1,
    borderBottomColor: '#000',
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
    fontSize: 20,
  },
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
 horizontalScroll: {
  flexDirection: 'row',
},
exploreCard: {
  width: 140,
  height: 180,
  borderRadius: 8,
  marginRight: 15,
  padding: 10,
  justifyContent: 'flex-end', // Positions text at bottom
},
cardImageBackground: {
  borderRadius: 8, // Matches container border radius
},
exploreCardText: {
  color: COLORS.textPrimary, // or 'white' for better contrast
  fontSize: 13,
  fontWeight: '600',
  textShadowColor: 'rgba(0, 0, 0, 0.75)', // Adds shadow for readability
  textShadowOffset: {width: 1, height: 1},
  textShadowRadius: 2,
},
  creditItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.card,
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
    borderRadius: 20,
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
  liveEventsContainer: {
  height: 200,
  backgroundColor: COLORS.card,
  borderRadius: 8,
  overflow: 'hidden',
  marginBottom: 20,
  },
  liveEventsImage: {
  width: '100%',
  height: '100%',
  },
  liveEventsOverlay: {
  flex: 1,
  backgroundColor: 'rgba(0, 0, 0, 0.3)', // Dark overlay
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'flex-end',
  padding: 20,
  },
  liveEventsContent: {
  flex: 1,
  },
  liveEventsArtist: {
  color: 'white',
  fontSize: 24,
  fontWeight: 'bold',
  marginBottom: 4,
  },
  liveEventsDate: {
  color: 'white',
  fontSize: 14,
  opacity: 0.9,
  marginBottom: 2,
  },
  liveEventsCount: {
  color: 'white',
  fontSize: 14,
  opacity: 0.9,
  },
  findTicketsButton: {
  backgroundColor: 'transparent',
  borderColor: 'white',
  borderWidth: 1,
  borderRadius: 20,
  paddingHorizontal: 20,
  paddingVertical: 8,
  },
  findTicketsText: {
  color: 'white',
  fontSize: 14,
  fontWeight: '600',
  },
  placeholderText: {
    color: COLORS.textSecondary,
    fontSize: 14,
  },
  iconImage: {
  width: 28,
  height: 28,
  tintColor: COLORS.textPrimary, // Makes the PNG white to match other icons
},
gradientOverlay: {
  position: 'absolute',
  bottom: 0,
  left: 0,
  right: 0,
  height: '60%',
},
});

export default App;