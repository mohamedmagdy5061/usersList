import React from 'react';
import { StyleSheet, View, Text, Image, FlatList } from 'react-native';
import { Card, FAB } from 'react-native-paper';

const data = [
  {
    id: 1,
    name: 'Mohamed Magdy Mohamed',
    location: 'Cairo',
    email: 'mohamedmagdy5061@gmail.com',
    phone: '00201093138866',
    job: 'Senior Frontend',
    img: require('../assets/FAVPNG_lilo.png')
  },
  {
    id: 2,
    name: 'Ali Mohamed Ali',
    location: 'Alx',
    email: 'mahoudAli@gmail.com',
    phone: '002010943453',
    job: 'Senior Backend',
    img: require('../assets/FAVPNG_mickey-mouse.png')
  },
  {
    id: 3,
    name: 'mahoud Ali Mohamed',
    location: 'Mansoura',
    email: 'mohamedmag@gmail.com',
    phone: '0020109534346',
    job: 'Senior UX',
    img: require('../assets/FAVPNG_lilo.png')
  },
  {
    id: 4,
    name: 'Mostafa Mohamed Ahmed',
    location: 'Cairo',
    email: 'MostafaMohamed@gmail.com',
    phone: '00201093778',
    job: 'Senior QA',
    img: require('../assets/FAVPNG_mickey-mouse.png')
  }
];

const Home = ({ navigation }) => {
  // const renderList = ( item ) => (
  //     // data.map(item => (
  //         <Card
  //         key={item.id}
  //         style={styles.cardViewContainer}
  //         onPress={() => navigation.navigate('Profile')}
  //       >
  //         {/* <Image style={styles.img} source={{uri:'https://interactive-examples.mdn.mozilla.net/media/examples/grapefruit-slice-332-332.jpg', cache: 'only-if-cached',}} /> */}
  //         <Image
  //           source={require('../assets/FAVPNG_lilo.png')}
  //           style={styles.cardViewImage}
  //         />
  //         <Text style={styles.cardViewText}>{item.name}</Text>
  //         <Text>{item.location}</Text>
  //       </Card>
  //     // ))
  // )

  return (
    <View style={styles.container}>
      {data.map(item => (
        <Card
          key={item.id}
          style={styles.cardViewContainer}
          onPress={() => navigation.navigate('Profile', { item })}
        >
          <View style={styles.cardView}>
            {/* <Image style={styles.img} source={{uri:'https://interactive-examples.mdn.mozilla.net/media/examples/grapefruit-slice-332-332.jpg', cache: 'only-if-cached',}} /> */}
            <Image source={item.img} style={styles.cardViewImage} />
            <View>
              <Text style={styles.cardViewText}>{item.name}</Text>
              <Text>{item.location}</Text>
            </View>
          </View>
        </Card>
      ))}
      <FAB
        style={styles.fab}
        small
        icon="plus"
        theme={{ colors: { accent: '#157EFB' } }}
        onPress={() => navigation.navigate('AddForm')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1
    // backgroundColor: '#d9e7ef',
    // alignItems: 'center',
    // justifyContent: 'center',
    // flexDirection:'row'
  },
  cardViewContainer: {
    marginBottom: 5,
    marginTop: 5,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 2,
    shadowOffset: {
      width: 2,
      height: 2
    }
  },
  cardView: {
    flexDirection: 'row',
  },
  cardViewImage: {
    width: 60,
    height: 60,
    borderRadius: 60 / 2,
    backgroundColor: 'gray',
    marginRight:10
  },
  cardViewText: {
    // fontSize: 16,
    paddingTop: 8,
  },
  fab: {
    position: 'absolute',
    margin: 16,
    right: 0,
    bottom: 0
  }
});

export default Home;
