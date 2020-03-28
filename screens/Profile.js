import React from 'react';
import { StyleSheet, View, Text, Image, Linking, Platform } from 'react-native';
import { Card, Button } from 'react-native-paper';

const openDiler = () => {
  if (Platform.OS === 'android') {
    Linking.openURL('tel:00201093138866');
  } else {
    Linking.openURL('telprompt:00201093138866');
  }
};

const Profile = props => {
  const {
    id,
    name,
    location,
    email,
    phone,
    job,
    img
  } = props.route.params.item;
  return (
    <View style={styles.root}>
      <View style={styles.profileContainer}>
        <Image source={img} style={styles.profileImage} />
        <Text style={styles.profileName}>{name}</Text>
        <Text style={styles.profileLocation}>{location}</Text>
      </View>
      <View style={styles.profileInfoContainer}>
        <Card
          style={styles.profileInfoCard}
          onPress={() => {
            Linking.openURL(`mailto:${email}`);
          }}
        >
          <View style={styles.cardView}>
            <Button icon="email" color={'#DB2544'} />
            <Text style={styles.profileInfo}>{email}</Text>
          </View>
        </Card>
        <Card style={styles.profileInfoCard} onPress={() => openDiler()}>
          <View style={styles.cardView}>
            <Button icon="phone" color={'#DB2544'} size={40} />
            <Text style={styles.profileInfo}>{phone} </Text>
          </View>
        </Card>
        <Card style={styles.profileInfoCard}>
          <View style={styles.cardView}>
            <Button icon="book" color={'#DB2544'} />
            <Text style={styles.profileInfo}>{job}</Text>
          </View>
        </Card>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: '#272931'
  },
  profileContainer: {
    flex: 1,
    alignItems: 'center',
    // justifyContent: 'center',
  },
  profileImage: {
    width: 150,
    height: 150,
    borderRadius: 150 / 2,
    backgroundColor: 'gray',
    marginTop: 50,
    transform: [{ scaleX: -1 }]
  },
  profileName: {
    margin: 10,
    color: '#FFF',
    fontSize: 16
  },
  profileLocation: {
    color: '#f6706d',
    fontSize: 14,
    justifyContent: 'flex-start',
    alignItems: 'flex-start'
  },
  profileInfoContainer: {
    flex: 1
  },
  profileInfo: {
    color: '#020202',
    fontSize: 14,
    paddingTop:8,
    // textAlignVertical:'meddil'

  },
  profileInfoCard: {
    margin: 5,
    // justifyContent: 'space-between',
    backgroundColor: '#F8BA3C',
    // flexWrap: 'wrap'
  },
  cardView: {
    flexDirection: 'row'
  }
});

export default Profile;
