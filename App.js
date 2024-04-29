import React from 'react';
import { ImageBackground, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useFonts } from 'expo-font';
import { PlayfairDisplay_400Regular } from '@expo-google-fonts/playfair-display';
import { SourceSans3_600SemiBold } from '@expo-google-fonts/source-sans-3';
import { Entypo } from '@expo/vector-icons';

import Banner from './assets/dlp-banner.jpg';
import BlockBG from './assets/dlp-block-background.jpg';
import Logo from './assets/dlp-logo.svg';
import PhoneCall from './assets/icons/phone-incoming-call.svg';
import House from './assets/icons/house-chimney-2.svg';
import SendMail from './assets/icons/send-email-1.svg';

export default function App() {
  let [fontsLoaded] = useFonts({
    PlayfairDisplay_400Regular,
    SourceSans3_600SemiBold,
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={[styles.imageBlock, { aspectRatio: 1920 / 1080 }]}>
        <ImageBackground
          source={Banner}
          style={styles.image}
          resizeMode='cover'
        >
          <View style={styles.header}>
            <View style={styles.logo}>
              <Logo height={'100%'} />
            </View>
            <View style={styles.menu}>
              <TouchableOpacity style={[styles.menuItem, {
                borderBottomWidth: 2,
                paddingBottom: 15,
              }]}>
                <Text style={styles.menuText}>What we do </Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.menuItem}>
                <Text style={styles.menuText}>Our work</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.menuItem}>
                <Text style={styles.menuText}>News</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.menuItem}>
                <Text style={styles.menuText}>Who we are</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.menuItem}>
                <Text style={styles.menuText}>Get in touch</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.content}>
            <Text style={styles.title}>We are the</Text>
            <Text style={styles.subtitle}>Digital</Text>
            <Text style={styles.subtitle}>Litigation</Text>
            <Text style={styles.subtitle}>Partners</Text>
            <TouchableOpacity style={styles.learnMoreButton}>
              <Text style={styles.learnMoreText}>Learn More</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text style={{ color: 'white', fontSize: 50 }}>↓</Text>
            </TouchableOpacity>
          </View>
        </ImageBackground>
      </View>
      <View style={styles.gradientContainer}>
        <LinearGradient
          colors={['rgba(3, 11, 12, 0)', 'rgba(3, 11, 12, 0.6)']}
          start={{ x: 0, y: 0 }}
          end={{ x: 0, y: 1 }}
          style={styles.gradient}
        />
        <View style={styles.rectangle} />
        <Text style={styles.automationText}>Automation</Text>
      </View>
      <View style={[styles.imageBlock, { aspectRatio: 1920 / 2160 }]}>
        <ImageBackground
          source={BlockBG}
          style={styles.image}
          resizeMode='cover'
        />
      </View>
      <View style={[styles.imageBlock, { aspectRatio: 1920 / 1500, backgroundColor: '#222222', }]}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            width: '100%',
            paddingHorizontal: '30%',
            marginTop: '12%',
          }}
        >
          <View
            style={{

            }}>
            <View
              style={{
                borderRadius: 100,
                width: 180,
                aspectRatio: 1,
                backgroundColor: '#10424B',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <PhoneCall width={'65%'} />
            </View>
            <Text style={styles.cirlceIcons}>0151 111 2222</Text>
          </View>
          <View
            style={{

            }}>
            <View
              style={{
                borderRadius: 100,
                width: 180,
                aspectRatio: 1,
                backgroundColor: '#10424B',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <House width={'65%'} />
            </View>
            <Text style={styles.cirlceIcons}>123 Address Street, L1 2XY</Text>
          </View>
          <View
            style={{

            }}>
            <View
              style={{
                borderRadius: 100,
                width: 180,
                aspectRatio: 1,
                backgroundColor: '#10424B',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <SendMail width={'65%'} />
            </View>
            <Text style={styles.cirlceIcons}>info@dlp.com</Text>
          </View>
        </View>
        <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: '10%' }} >
          <Text style={{ fontFamily: 'PlayfairDisplay_400Regular', fontSize: 36, color: 'white' }} >Enquire Online</Text>
        </View>
        <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginTop: '10%', paddingHorizontal: '30%' }}>
          <View style={{ flex: 1, paddingRight: 10 }} >
            <TextInput placeholder='Name' style={{ backgroundColor: 'white', borderRadius: 10, padding: 10, marginVertical: 5 }} />
            <TextInput placeholder='Email' style={{ backgroundColor: 'white', borderRadius: 10, padding: 10, marginVertical: 5 }} />
            <TextInput placeholder='Phone Number' style={{ backgroundColor: 'white', borderRadius: 10, padding: 10, marginVertical: 5 }} />
            <TouchableOpacity style={{ borderRadius: 30, borderWidth: 2, borderColor: 'white', padding: 10, marginVertical: 5 }}>
              <Text style={{ color: 'white', textAlign: 'center' }}>Send Message</Text>
            </TouchableOpacity>
          </View>
          <View style={{ flex: 2 }}>
            <TextInput placeholder='Message' multiline editable numberOfLines={8} maxLength={255} style={{ backgroundColor: 'white', borderRadius: 10, padding: 10, marginVertical: 5 }} />
          </View>
        </View>

        <Text style={{ textAlign: 'center', color: 'white', opacity: '60%', marginVertical: '2%' }} >*By pressing send you consent to Digital Litigation Partners collecting your submitted information in order to respond to your enquiry. For more information view our Privacy Policy</Text>

      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    alignItems: 'center'
  },
  imageBlock: {
    width: '100%',
  },
  image: {
    width: '100%',
    height: '100%',
    alignItems: 'center'
  },
  header: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: '5%',
    paddingHorizontal: '5%',
  },
  logo: {
    flex: 1,
  },
  menu: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  menuItem: {
    borderColor: 'white',

  },
  menuText: {
    color: 'white',
    fontSize: '1.5em',
    fontFamily: 'PlayfairDisplay_400Regular',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    color: 'white',
    fontSize: 65,
    fontFamily: 'PlayfairDisplay_400Regular',
  },
  subtitle: {
    color: 'white',
    fontSize: 100,
    fontFamily: 'SourceSans3_600SemiBold',
  },
  learnMoreButton: {
    borderColor: 'white',
    borderWidth: 2,
    borderRadius: 30,
    marginTop: 20,
  },
  learnMoreText: {
    color: 'white',
    fontSize: 30,
    paddingHorizontal: 30,
    paddingVertical: 5,
    paddingVertical: 5,
  },
  gradientContainer: {
    width: '100%',
    backgroundColor: '#071D21',
    position: 'relative',
    aspectRatio: 1920 / 2160,
    overflow: 'hidden',
  },
  gradient: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
  },
  rectangle: {
    position: 'absolute',
    width: '70%',
    height: '150%',
    backgroundColor: '#030B0C',
    transform: [{ rotate: '-15deg' }],
    top: '-10%',
    left: '-20%',
    zIndex: -1,
  },
  automationText: {
    fontSize: '15vw',
    fontFamily: 'PlayfairDisplay_400Regular',
    color: 'white',
    opacity: '10%',
    transform: [{ rotate: '75deg' }],
    position: 'absolute',
    top: '35%',
    left: '11.7%',
  },
  cirlceIcons: {
    color: 'white',
    fontSize: 16,
    fontFamily: 'SourceSans3_600SemiBold',
    textAlign: 'center'
  }
});
