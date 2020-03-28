import React from 'react'
import {
    StyleSheet,
    TouchableOpacity,
    Text,
  } from 'react-native'
  
 const Button = ({title, onPress }) => {
    return (
        <TouchableOpacity style={styles.btn} onPress={onPress}>
            <Text style={styles.textBtn}>{title}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    btn: {
        backgroundColor: "#02386f",
        margin: 5,
        borderRadius: 2,
        borderColor: '#02386f',
        borderWidth: 1,
        alignSelf: 'stretch',
        padding: 5   
    },
    textBtn: {
        color: '#fff',
        fontSize: 16,
        fontWeight: '600',
        alignSelf: 'center'
      }
});

export default Button