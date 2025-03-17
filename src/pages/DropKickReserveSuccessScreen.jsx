import React from 'react';
import {Image, Text, StyleSheet, ImageBackground} from 'react-native';
import {COLORS, FONTS, height, width} from '../helpers/colors';
import {useNavigation} from '@react-navigation/native';
import DropKickHeader from '../components/DropKickHeader';
import DropKickComponent from '../components/DropKickComponent';
import BackgroundImage from '../assets/background.png';

export default function () {
  const navigation = useNavigation();

  const handleNavigateHome = () => {
    navigation.navigate('DrawerNavigator', {screen: 'DropKickHomeScreen'});
  };

  return (
    <ImageBackground source={BackgroundImage} style={styles.container}>
      <DropKickHeader />

      <Image
        source={require('../assets/success_icon.png')}
        style={styles.image}
      />

      <Text style={styles.text}>Спасибо за резерв!</Text>

      <DropKickComponent
        text="На главную"
        style={styles.button}
        onPress={handleNavigateHome}
      />
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: height,
    width: width,
    backgroundColor: COLORS.white,
  },
  button: {
    position: 'absolute',
    bottom: 50,
  },
  text: {
    color: COLORS.black,
    textAlign: 'center',
    fontFamily: FONTS.black,
    fontSize: 40,
    marginTop: '25%',
    paddingVertical: 20,
  },
  image: {
    width: width * 0.5,
    height: width * 0.5,
    alignSelf: 'center',
    marginTop: 30,
    objectFit: 'contain',
  },
});
