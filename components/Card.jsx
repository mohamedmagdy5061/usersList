import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

const Card = () => {
    return(
        <View style={styles.container}>

        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        marginButtom: 10,
        marginLeft: '2%',
        width:'96%',
        shadowColor: '#000',
        shadowOpacity: 0.2,
        shadowRadius: 1,
        shadowOffset: {
            width: 3,
            height: 3
        }
    }
})

export default Card