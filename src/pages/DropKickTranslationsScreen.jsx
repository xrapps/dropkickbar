import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  ScrollView,
  ImageBackground,
} from 'react-native';
import {COLORS, FONTS, height, width} from '../helpers/colors';
import CapitalHeader from '../components/CapitalHeader';
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
      <CapitalHeader />

      <Text style={styles.title}>Трансляции</Text>

      <ScrollView
        style={{flex: 1}}
        contentContainerStyle={{paddingBottom: 100, marginTop: 15}}>
        {renderBroadcast(
          'NHL Playoffs',
          '02.05 19:45',
          'Tampa Bay Lightning \n' + 'Boston Bruins',
        )}
        {renderBroadcast(
          'KHL Gagarin',
          '04.05 20:30',
          'CSKA Moscow \n' + 'Ak Bars Kazan',
        )}
        {renderBroadcast('SHL Finals', '06.05 18:00', 'Frolunda \n' + 'Lulea')}
        {renderBroadcast('Liiga', '08.05 17:30', 'Tappara \n' + 'HIFK')}
        {renderBroadcast(
          'AHL',
          '10.05 21:00',
          'Hershey Bears \n' + 'Chicago Wolves',
        )}
        {renderBroadcast(
          'DEL Playoffs',
          '12.05 19:15',
          'Eisbären Berlin \n' + 'Adler Mannheim',
        )}
        {renderBroadcast('Swiss NL', '14.05 20:45', 'ZSC Lions \n' + 'EV Zug')}
        {renderBroadcast(
          'NCAA Frozen',
          '16.05 18:30',
          'Minnesota \n' + 'Denver',
        )}
        {renderBroadcast(
          'Czech Extra',
          '18.05 17:00',
          'Sparta Prague \n' + 'Ocelari Trinec',
        )}
        {renderBroadcast(
          'EIHL',
          '20.05 16:45',
          'Sheffield Steelers \n' + 'Cardiff Devils',
        )}
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
    margin: 20,
    textAlign: 'center',
  },
});
