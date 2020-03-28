import React from 'react'
import {
    StyleSheet,
    Text,
    View,
  } from 'react-native'
import { TextInput } from 'react-native-gesture-handler';
  
 const Input = ({label, placeholder, secureTextEntry, onChangeText}) => {
    return (
        <View style={styles.inputContainer}>
            <Text style={styles.textInput}>{label}</Text>
            <TextInput 
                placeholder= {placeholder}
                secureTextEntry= {secureTextEntry}
                onChangeText= {onChangeText}
                autoCapitalize= 'none'
            />
        </View>
    )
}

const styles = StyleSheet.create({
    inputContainer: {
        backgroundColor: "#f1f1f1",
        margin: 5,
        borderRadius: 2,
        borderColor: '#f1f1f1',
        borderWidth: 1,
        alignSelf: 'stretch',
        padding: 5   
    },
    textInput: {
        // outline: 'none'
        // height: 17,
        // border: 0,
        // width: calc(100% - 2),
        // marginLeft: 1,
        // boxShadow: '-8 10 0 -7 #ebebeb, 8 10 0 -7 #ebebeb',
        // transition: 'box-shadow 0.3s',

      }
});

export default Input