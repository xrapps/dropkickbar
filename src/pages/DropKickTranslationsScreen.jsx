import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  ScrollView,
  ImageBackground,
} from 'react-native';
import {COLORS, FONTS, height, width} from '../helpers/colors';
import DropKickHeader from '../components/DropKickHeader';
import BackgroundImage from '../assets/background.png';

export default function () {
  const renderBroadcast = (league, time, teams) => (
    <View style={styles.broadcast}>
      <View style={styles.leagueContainer}>
        <Text style={styles.league}>{league}</Text>
      </View>

      <Text style={styles.matchTime}>{time}</Text>

      <View style={styles.teamsContainer}>
        <Text style={styles.teams}>{teams}</Text>
      </View>
    </View>
  );

  return (
    <ImageBackground source={BackgroundImage} style={styles.container}>
      <DropKickHeader />

      <Text style={styles.title}>Трансляции</Text>

      <ScrollView
        style={{flex: 1}}
        contentContainerStyle={{paddingBottom: 100, marginTop: 15}}>
        {renderBroadcast('ATP Tour', '02.04 13:00', 'Novak Djokovic \n' + 'Carlos Alcaraz')}
        {renderBroadcast('WTA Tour', '05.04 15:45', 'Iga Swiatek \n' + 'Aryna Sabalenka')}
        {renderBroadcast('Davis Cup', '08.04 17:15', 'France \n' + 'Australia')}
        {renderBroadcast('Fed Cup', '11.04 19:30', 'USA \n' + 'Russia')}
        {renderBroadcast('Grand Slam', '14.04 21:00', 'Rafael Nadal \n' + 'Daniil Medvedev')}
        {renderBroadcast('ATP Masters', '17.04 23:15', 'Alexander Zverev \n' + 'Stefanos Tsitsipas')}
        {renderBroadcast('WTA Premier', '20.04 14:30', 'Simona Halep \n' + 'Naomi Osaka')}
        {renderBroadcast('Cha Tour', '23.04 16:45', 'Lorenzo Musetti \n' + 'Jannik Sinner')}
        {renderBroadcast('Next Gen', '26.04 19:00', 'Holger Rune \n' + 'Felix Auger-Aliassime')}
        {renderBroadcast('Laver Cup', '29.04 21:15', 'Team Europe \n' + 'Team World')}
      </ScrollView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height,
    width,
    backgroundColor: COLORS.white,
  },
  broadcast: {
    width: width * 0.9,
    alignSelf: 'center',
    marginTop: 20,
    borderColor: COLORS.main,
    borderWidth: 2,
    paddingLeft: 20,
    backgroundColor: COLORS.white,
  },
  league: {
    fontSize: 20,
    fontFamily: FONTS.black,
    color: COLORS.black,
    paddingVertical: 8,
  },
  leagueContainer: {
    width: '100%',
    borderRadius: 15,
    alignItems: 'center',
    flexDirection: 'row',
  },
  teamsContainer: {
    width: '100%',
    paddingBottom: 10,
  },
  matchTime: {
    fontSize: 14,
    fontFamily: FONTS.bold,
    color: COLORS.main,
    width: '60%',
    marginLeft: 15,
  },
  teams: {
    textAlign: 'left',
    fontFamily: FONTS.bold,
    fontSize: 20,
    color: COLORS.black,
    marginTop: 5,
    marginLeft: 5,
    opacity: 0.7,
  },
  title: {
    fontSize: 30,
    fontFamily: FONTS.bold,
    color: COLORS.black,
    textAlign: 'center',
    backgroundColor: COLORS.main,
    marginTop: 30,
    paddingVertical: 10,
  },
});
